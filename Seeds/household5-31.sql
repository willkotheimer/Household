USE [master]
GO
/****** Object:  Database [Household]    Script Date: 5/31/2021 3:38:59 PM ******/
CREATE DATABASE [Household]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Household', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Household.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Household_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Household_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Household] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Household].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Household] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Household] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Household] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Household] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Household] SET ARITHABORT OFF 
GO
ALTER DATABASE [Household] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Household] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Household] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Household] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Household] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Household] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Household] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Household] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Household] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Household] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Household] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Household] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Household] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Household] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Household] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Household] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Household] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Household] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Household] SET  MULTI_USER 
GO
ALTER DATABASE [Household] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Household] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Household] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Household] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Household] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Household] SET QUERY_STORE = OFF
GO
USE [Household]
GO
/****** Object:  Table [dbo].[Assignments]    Script Date: 5/31/2021 3:38:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Assignments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Week] [int] NOT NULL,
	[IsCompleted] [bit] NULL,
	[Rating] [int] NULL,
	[ChoreId] [int] NOT NULL,
 CONSTRAINT [PK_Assignment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Chores]    Script Date: 5/31/2021 3:38:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Chores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Category] [varchar](50) NOT NULL,
	[Description] [varchar](max) NULL,
	[HouseHoldId] [int] NULL,
 CONSTRAINT [PK_Chores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Household]    Script Date: 5/31/2021 3:38:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Household](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Household] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Household_User]    Script Date: 5/31/2021 3:38:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Household_User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[HouseholdId] [int] NOT NULL,
	[IsConfirmed] [bit] NOT NULL,
 CONSTRAINT [PK_Household_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Images]    Script Date: 5/31/2021 3:38:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Images](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Image] [varchar](50) NOT NULL,
	[ChoreId] [int] NOT NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 5/31/2021 3:38:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Firstname] [varchar](50) NULL,
	[Lastname] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[FirebaseKey] [varchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Assignments] ON 

INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (1, 1, 2, 1, 4, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (2, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (3, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (4, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (5, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (6, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (7, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (8, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (9, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (10, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (11, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (12, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (13, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (14, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (15, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (16, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (17, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (18, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (19, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (20, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (21, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (22, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (23, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (24, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (25, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (26, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (27, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (28, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (29, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (30, 1, 2, 1, 5, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (31, 1, 2, 1, 5, 5)
SET IDENTITY_INSERT [dbo].[Assignments] OFF
GO
SET IDENTITY_INSERT [dbo].[Chores] ON 

INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (1, N'Floor', N'1', N'Please move chairs and sweep all areas. Move the chairs onto the table. Mop if its tuesday or thursday.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (2, N'Counters', N'1', N'Wet rag should suffice, be sure to clean stove as well.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (3, N'Wash dishes', N'1', N'Dishes should be cleaned, and added to dishwasher.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (4, N'Clean sink', N'1', N'Afer dishes are clean, clean out sink with soapy water.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (5, N'Shoes are organized', N'3', N'Please make sure shoes are in rows.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (6, N'Hang clothes', N'3', N'Everything but t-shirts, socks and underwear, and shorts can be hung up.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (7, N'Shoes are organized', N'4', N'Please make sure shoes are in rows.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (8, N'Hang clothes', N'4', N'Everything but t-shirts, socks and underwear, and shorts can be hung up.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (9, N'Stack Nugget', N'5', N'Put in the corner.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (10, N'Sofa', N'5', N'Straighten cushions and pillows.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (11, N'Toys Organized', N'5', N'Off floor and use plan to stack on shelves', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (12, N'Entertainment center', N'5', N'Free of books and papers, use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (13, N'Vacuum', N'5', N'Vaccuum floor and steps', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (14, N'Shoes', N'5', N'Off floor and in shoes section, use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (15, N'Stack Nugget', N'5', N'Put in the corner.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (16, N'Sofa', N'5', N'Straighten cushions and pillows.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (17, N'Toys Organized', N'5', N'Off floor and use plan to stack on shelves', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (18, N'Entertainment center', N'5', N'Free of books and papers, use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (19, N'Vacuum', N'5', N'Vaccuum floor and steps', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (20, N'Shoes', N'5', N'Off floor and in shoes section, use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (21, N'Clean Tub', N'7', N'Put away toys. Scour and use sponge.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (22, N'Toilet', N'7', N'Use scrub brush.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (23, N'Organize sink', N'7', N'Use plan for sink accoutrements.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (24, N'Clean sink', N'7', N'Clean with soap and sponge.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (25, N'Floor', N'7', N'Mop it.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (26, N'Toilet', N'8', N'Use scrub brush.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (27, N'Organize sink', N'8', N'Use plan for sink accoutrements.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (28, N'Clean sink', N'8', N'Clean with soap and sponge.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (29, N'Floor', N'8', N'Mop it.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (30, N'Organize', N'9', N'Use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (31, N'Organize', N'10', N'Use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (32, N'Put away any dishes.', N'10', N'Use plan for locations.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (33, N'Organize', N'11', N'Use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (34, N'Organize', N'12', N'Use plan.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (35, N'Sweep', N'12', N'Simple Cleaning.', NULL)
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description], [HouseHoldId]) VALUES (36, N'Windows', N'1', N'Use Windex', NULL)
SET IDENTITY_INSERT [dbo].[Chores] OFF
GO
SET IDENTITY_INSERT [dbo].[Household] ON 

INSERT [dbo].[Household] ([Id], [Name]) VALUES (1, N'Kotheimer')
INSERT [dbo].[Household] ([Id], [Name]) VALUES (2, N'Myhouse')
SET IDENTITY_INSERT [dbo].[Household] OFF
GO
SET IDENTITY_INSERT [dbo].[Household_User] ON 

INSERT [dbo].[Household_User] ([Id], [UserId], [HouseholdId], [IsConfirmed]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Household_User] ([Id], [UserId], [HouseholdId], [IsConfirmed]) VALUES (2, 2, 1, 1)
INSERT [dbo].[Household_User] ([Id], [UserId], [HouseholdId], [IsConfirmed]) VALUES (4, 3, 2, 1)
SET IDENTITY_INSERT [dbo].[Household_User] OFF
GO
SET IDENTITY_INSERT [dbo].[Images] ON 

INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (1, N'http://dummyimage.com/178x100.png/cc0000/ffffff', 1, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (2, N'http://dummyimage.com/229x100.png/5fa2dd/ffffff', 2, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (3, N'http://dummyimage.com/122x100.png/cc0000/ffffff', 3, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (4, N'http://dummyimage.com/152x100.png/5fa2dd/ffffff', 4, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (5, N'http://dummyimage.com/138x100.png/5fa2dd/ffffff', 5, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (6, N'http://dummyimage.com/108x100.png/dddddd/000000', 6, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (7, N'http://dummyimage.com/189x100.png/5fa2dd/ffffff', 7, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (8, N'http://dummyimage.com/114x100.png/5fa2dd/ffffff', 8, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (9, N'http://dummyimage.com/108x100.png/cc0000/ffffff', 9, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (10, N'http://dummyimage.com/152x100.png/dddddd/000000', 10, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (11, N'http://dummyimage.com/125x100.png/dddddd/000000', 11, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (12, N'http://dummyimage.com/232x100.png/cc0000/ffffff', 12, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (13, N'http://dummyimage.com/132x100.png/ff4444/ffffff', 13, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (14, N'http://dummyimage.com/210x100.png/cc0000/ffffff', 14, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (15, N'http://dummyimage.com/113x100.png/5fa2dd/ffffff', 15, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (16, N'http://dummyimage.com/197x100.png/5fa2dd/ffffff', 16, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (17, N'http://dummyimage.com/223x100.png/5fa2dd/ffffff', 17, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (18, N'http://dummyimage.com/119x100.png/ff4444/ffffff', 18, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (19, N'http://dummyimage.com/123x100.png/ff4444/ffffff', 19, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (20, N'http://dummyimage.com/101x100.png/cc0000/ffffff', 20, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (21, N'http://dummyimage.com/121x100.png/ff4444/ffffff', 21, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (22, N'http://dummyimage.com/201x100.png/dddddd/000000', 22, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (23, N'http://dummyimage.com/122x100.png/5fa2dd/ffffff', 23, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (24, N'http://dummyimage.com/103x100.png/dddddd/000000', 24, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (25, N'http://dummyimage.com/201x100.png/cc0000/ffffff', 25, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (26, N'http://dummyimage.com/116x100.png/cc0000/ffffff', 26, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (27, N'http://dummyimage.com/223x100.png/dddddd/000000', 27, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (28, N'http://dummyimage.com/116x100.png/5fa2dd/ffffff', 28, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (29, N'http://dummyimage.com/159x100.png/ff4444/ffffff', 29, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (30, N'http://dummyimage.com/115x100.png/ff4444/ffffff', 30, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (31, N'http://dummyimage.com/131x100.png/dddddd/000000', 31, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (32, N'http://dummyimage.com/205x100.png/cc0000/ffffff', 32, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (33, N'http://dummyimage.com/228x100.png/dddddd/000000', 33, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (34, N'http://dummyimage.com/108x100.png/5fa2dd/ffffff', 34, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (35, N'http://dummyimage.com/166x100.png/ff4444/ffffff', 35, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (36, N'http://dummyimage.com/249x100.png/dddddd/000000', 36, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (37, N'http://dummyimage.com/138x100.png/5fa2dd/ffffff', 1, 0)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (38, N'http://dummyimage.com/138x100.png/5fa2dd/ffffff', 1, 1)
INSERT [dbo].[Images] ([Id], [Image], [ChoreId], [Active]) VALUES (39, N'http://dummyimage.com/138x100.png/5fa2dd/ffffff', 2, 0)
SET IDENTITY_INSERT [dbo].[Images] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [FirebaseKey]) VALUES (1, N'Will', N'Kotheimer', N'wkotheimer@gmail.com', N'1')
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [FirebaseKey]) VALUES (2, N'Rachel', N'Kotheimer', N'rkotheimer@gmail.com', N'2')
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [FirebaseKey]) VALUES (3, N'Jon', N'Foresythe', N'jon@veryhungry.com', N'3')
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [FirebaseKey]) VALUES (4, N'Dr', N'Stranger', N'drStranger@gmail.com', N'4')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Assignments]  WITH CHECK ADD  CONSTRAINT [FK_Assignments_Chores] FOREIGN KEY([ChoreId])
REFERENCES [dbo].[Chores] ([Id])
GO
ALTER TABLE [dbo].[Assignments] CHECK CONSTRAINT [FK_Assignments_Chores]
GO
ALTER TABLE [dbo].[Assignments]  WITH CHECK ADD  CONSTRAINT [FK_Assignments_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assignments] CHECK CONSTRAINT [FK_Assignments_User]
GO
ALTER TABLE [dbo].[Chores]  WITH CHECK ADD  CONSTRAINT [FK_Chores_Chores] FOREIGN KEY([Id])
REFERENCES [dbo].[Chores] ([Id])
GO
ALTER TABLE [dbo].[Chores] CHECK CONSTRAINT [FK_Chores_Chores]
GO
ALTER TABLE [dbo].[Chores]  WITH CHECK ADD  CONSTRAINT [FK_Chores_Household] FOREIGN KEY([HouseHoldId])
REFERENCES [dbo].[Household] ([Id])
GO
ALTER TABLE [dbo].[Chores] CHECK CONSTRAINT [FK_Chores_Household]
GO
ALTER TABLE [dbo].[Household_User]  WITH CHECK ADD  CONSTRAINT [FK_Household_User_Household] FOREIGN KEY([HouseholdId])
REFERENCES [dbo].[Household] ([Id])
GO
ALTER TABLE [dbo].[Household_User] CHECK CONSTRAINT [FK_Household_User_Household]
GO
ALTER TABLE [dbo].[Household_User]  WITH CHECK ADD  CONSTRAINT [FK_User_Household] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Household_User] CHECK CONSTRAINT [FK_User_Household]
GO
ALTER TABLE [dbo].[Images]  WITH CHECK ADD  CONSTRAINT [FK_Images_Chores] FOREIGN KEY([ChoreId])
REFERENCES [dbo].[Chores] ([Id])
GO
ALTER TABLE [dbo].[Images] CHECK CONSTRAINT [FK_Images_Chores]
GO
USE [master]
GO
ALTER DATABASE [Household] SET  READ_WRITE 
GO
