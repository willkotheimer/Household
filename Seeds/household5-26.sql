USE [Household]
GO
/****** Object:  Table [dbo].[Assignments]    Script Date: 5/26/2021 11:02:35 PM ******/
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
/****** Object:  Table [dbo].[Categories]    Script Date: 5/26/2021 11:02:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[HouseholdId] [int] NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Chores]    Script Date: 5/26/2021 11:02:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Chores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Category] [int] NOT NULL,
	[Description] [varchar](max) NULL,
 CONSTRAINT [PK_Chores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Household]    Script Date: 5/26/2021 11:02:35 PM ******/
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
/****** Object:  Table [dbo].[Household_User]    Script Date: 5/26/2021 11:02:35 PM ******/
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
/****** Object:  Table [dbo].[Images]    Script Date: 5/26/2021 11:02:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Images](
	[Id] [int] NOT NULL,
	[Image] [varchar](50) NOT NULL,
	[ChoreId] [int] NOT NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 5/26/2021 11:02:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
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

INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (1, 1, 1, 0, NULL, 1)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (2, 1, 1, 0, NULL, 2)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (3, 1, 1, 0, NULL, 3)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (4, 1, 1, 0, NULL, 4)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (5, 1, 1, 0, NULL, 5)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (6, 1, 1, 0, NULL, 6)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (7, 1, 1, 0, NULL, 7)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (8, 1, 1, 0, NULL, 8)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (9, 1, 1, 0, NULL, 9)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (10, 1, 1, 0, NULL, 10)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (11, 1, 1, 0, NULL, 11)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (12, 1, 1, 0, NULL, 12)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (13, 1, 1, 0, NULL, 13)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (14, 1, 1, 0, NULL, 14)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (15, 1, 1, 0, NULL, 15)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (16, 2, 1, 0, NULL, 16)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (17, 2, 1, 0, NULL, 17)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (18, 2, 1, 0, NULL, 18)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (19, 2, 1, 0, NULL, 19)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (20, 2, 1, 0, NULL, 20)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (21, 2, 1, 0, NULL, 21)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (22, 2, 1, 0, NULL, 22)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (23, 2, 1, 0, NULL, 23)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (24, 2, 1, 0, NULL, 24)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (25, 2, 1, 0, NULL, 25)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (26, 2, 1, 0, NULL, 26)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (27, 2, 1, 0, NULL, 27)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (28, 2, 1, 0, NULL, 28)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (29, 2, 1, 0, NULL, 29)
INSERT [dbo].[Assignments] ([Id], [UserId], [Week], [IsCompleted], [Rating], [ChoreId]) VALUES (30, 2, 1, 0, NULL, 30)
SET IDENTITY_INSERT [dbo].[Assignments] OFF
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (1, N'Kitchen', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (2, N'Bathroom', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (3, N'Bedroom Closet1', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (4, N'Bedroom Closet2', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (5, N'Livingroom', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (6, N'Kitchen', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (7, N'Upstairs Bathroom', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (8, N'Downstairs Bathroom', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (9, N'Pantry', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (10, N'Cabinets', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (11, N'Shed', 1)
INSERT [dbo].[Categories] ([Id], [Name], [HouseholdId]) VALUES (12, N'Garage', 1)
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Chores] ON 

INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (1, N'Floor', 1, N'Please move chairs and sweep all areas. Mop if its tuesday or thursday.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (2, N'Counters', 1, N'Wet rag should suffice, be sure to clean stove as well.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (3, N'Wash dishes', 1, N'Dishes should be cleaned, and added to dishwasher.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (4, N'Clean sink', 1, N'Afer dishes are clean, clean out sink with soapy water.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (5, N'Shoes are organized', 3, N'Please make sure shoes are in rows.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (6, N'Hang clothes', 3, N'Everything but t-shirts, socks and underwear, and shorts can be hung up.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (7, N'Shoes are organized', 4, N'Please make sure shoes are in rows.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (8, N'Hang clothes', 4, N'Everything but t-shirts, socks and underwear, and shorts can be hung up.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (9, N'Stack Nugget', 5, N'Put in the corner.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (10, N'Sofa', 5, N'Straighten cushions and pillows.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (11, N'Toys Organized', 5, N'Off floor and use plan to stack on shelves')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (12, N'Entertainment center', 5, N'Free of books and papers, use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (13, N'Vacuum', 5, N'Vaccuum floor and steps')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (14, N'Shoes', 5, N'Off floor and in shoes section, use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (15, N'Stack Nugget', 5, N'Put in the corner.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (16, N'Sofa', 5, N'Straighten cushions and pillows.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (17, N'Toys Organized', 5, N'Off floor and use plan to stack on shelves')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (18, N'Entertainment center', 5, N'Free of books and papers, use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (19, N'Vacuum', 5, N'Vaccuum floor and steps')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (20, N'Shoes', 5, N'Off floor and in shoes section, use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (21, N'Clean Tub', 7, N'Put away toys. Scour and use sponge.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (22, N'Toilet', 7, N'Use scrub brush.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (23, N'Organize sink', 7, N'Use plan for sink accoutrements.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (24, N'Clean sink', 7, N'Clean with soap and sponge.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (25, N'Floor', 7, N'Mop it.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (26, N'Toilet', 8, N'Use scrub brush.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (27, N'Organize sink', 8, N'Use plan for sink accoutrements.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (28, N'Clean sink', 8, N'Clean with soap and sponge.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (29, N'Floor', 8, N'Mop it.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (30, N'Organize', 9, N'Use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (31, N'Organize', 10, N'Use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (32, N'Put away any dishes.', 10, N'Use plan for locations.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (33, N'Organize', 11, N'Use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (34, N'Organize', 12, N'Use plan.')
INSERT [dbo].[Chores] ([Id], [Name], [Category], [Description]) VALUES (35, N'Sweep', 12, N'Simple Cleaning.')
SET IDENTITY_INSERT [dbo].[Chores] OFF
GO
SET IDENTITY_INSERT [dbo].[Household] ON 

INSERT [dbo].[Household] ([Id], [Name]) VALUES (1, N'Kotheimer')
SET IDENTITY_INSERT [dbo].[Household] OFF
GO
SET IDENTITY_INSERT [dbo].[Household_User] ON 

INSERT [dbo].[Household_User] ([Id], [UserId], [HouseholdId], [IsConfirmed]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Household_User] ([Id], [UserId], [HouseholdId], [IsConfirmed]) VALUES (2, 2, 1, 1)
SET IDENTITY_INSERT [dbo].[Household_User] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [Firstname], [Lastname], [Email], [FirebaseKey]) VALUES (1, N'Will', N'Kotheimer', N'wkotheimer@gmail.com', N'1')
INSERT [dbo].[User] ([Id], [Firstname], [Lastname], [Email], [FirebaseKey]) VALUES (2, N'Rachel', N'Kotheimer', N'rkotheimer@gmail.com', N'2')
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Assignments]  WITH CHECK ADD  CONSTRAINT [FK_Assignments_Chores] FOREIGN KEY([ChoreId])
REFERENCES [dbo].[Chores] ([Id])
GO
ALTER TABLE [dbo].[Assignments] CHECK CONSTRAINT [FK_Assignments_Chores]
GO
ALTER TABLE [dbo].[Assignments]  WITH CHECK ADD  CONSTRAINT [FK_Assignments_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[Assignments] CHECK CONSTRAINT [FK_Assignments_User]
GO
ALTER TABLE [dbo].[Categories]  WITH CHECK ADD  CONSTRAINT [FK_Categories_Household] FOREIGN KEY([HouseholdId])
REFERENCES [dbo].[Household] ([Id])
GO
ALTER TABLE [dbo].[Categories] CHECK CONSTRAINT [FK_Categories_Household]
GO
ALTER TABLE [dbo].[Chores]  WITH CHECK ADD  CONSTRAINT [FK_Chores_Categories] FOREIGN KEY([Category])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Chores] CHECK CONSTRAINT [FK_Chores_Categories]
GO
ALTER TABLE [dbo].[Chores]  WITH CHECK ADD  CONSTRAINT [FK_Chores_Chores] FOREIGN KEY([Id])
REFERENCES [dbo].[Chores] ([Id])
GO
ALTER TABLE [dbo].[Chores] CHECK CONSTRAINT [FK_Chores_Chores]
GO
ALTER TABLE [dbo].[Household]  WITH CHECK ADD  CONSTRAINT [FK_Household_Category] FOREIGN KEY([Id])
REFERENCES [dbo].[Household] ([Id])
GO
ALTER TABLE [dbo].[Household] CHECK CONSTRAINT [FK_Household_Category]
GO
ALTER TABLE [dbo].[Household_User]  WITH CHECK ADD  CONSTRAINT [FK_Household_User_Household] FOREIGN KEY([HouseholdId])
REFERENCES [dbo].[Household] ([Id])
GO
ALTER TABLE [dbo].[Household_User] CHECK CONSTRAINT [FK_Household_User_Household]
GO
ALTER TABLE [dbo].[Household_User]  WITH CHECK ADD  CONSTRAINT [FK_User_Household] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[Household_User] CHECK CONSTRAINT [FK_User_Household]
GO
ALTER TABLE [dbo].[Images]  WITH CHECK ADD  CONSTRAINT [FK_Images_Chores] FOREIGN KEY([ChoreId])
REFERENCES [dbo].[Chores] ([Id])
GO
ALTER TABLE [dbo].[Images] CHECK CONSTRAINT [FK_Images_Chores]
GO
