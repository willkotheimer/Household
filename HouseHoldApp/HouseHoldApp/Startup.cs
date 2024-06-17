using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using HouseHoldApp.DataAccess;
namespace HouseHoldApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // Add EF Core
            services.AddDbContext<HouseholdContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            string connectionString = Configuration.GetConnectionString("DefaultConnection"); //  dapper

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
              .AddJwtBearer(options =>
              {
                  options.IncludeErrorDetails = true;
                  options.Authority = "https://securetoken.google.com/toboggan-42319";
                  options.TokenValidationParameters = new TokenValidationParameters
                  {
                      ValidateLifetime = true,
                      ValidateAudience = true,
                      ValidateIssuer = true,
                      ValidAudience = "toboggan-42319",
                      ValidIssuer = "https://securetoken.google.com/toboggan-42319"
                  };
              });

            services.AddScoped<AssignmentsChoresRepository>(); // Register repository
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

    }
}
