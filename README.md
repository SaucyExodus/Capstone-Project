# Technical Documentation

## Steps to Start Web Server using AWS EC2 Instance

### Step 1: Create AWS Account and Log into the Console
1. Navigate to [AWS Management Console](https://aws.amazon.com/console/).
2. Create an account if you do not already have one, or log in with your existing account.

### Step 2: Navigate to EC2
1. In the AWS Management Console, find and select EC2 under the "Services" menu.

### Step 3: Launch an EC2 Instance
1. Click on "Launch Instance."
2. Provide a name for your instance and configure the compute power.

#### Configuration Used:
- **OS Image**: Amazon Linux 2023 AMI 64-bit (x86)
- **Instance Type**: t2.micro
- **Key Pair**: Create a new key pair
  - Select RSA and .pem for the type and format.
  - Download the key pair to your device and store it in a memorable location.
- **Network Settings**:
  - Check "Allow HTTP traffic from the internet."
  - Check "Allow SSH traffic from 0.0.0.0/0."
- **Configure Storage**: Leave default settings (adjust if not using free tier).
- **Advanced Details**: Leave default settings.

3. Click "Launch" to start your instance.
4. Wait a few minutes for the instance to initialize.

### Step 4: Navigate to the EC2 Dashboard
1. In the EC2 Dashboard, check the "Instances (running)" tab.
2. If the number of running instances is 0, navigate to the "Instances" tab.
3. Select your newly created EC2 instance.
4. Right-click the instance and select "Start Instance."

### Step 5: SSH into Your Instance
1. First use this following command to chmod your key.pem
   ```sh
   chmod 400 "path/to/KeyPair.pem"
   ```
2. Use the following command to SSH into your instance:
   ```sh
   ssh -i “path/to/KeyPair.pem” ec2-user@ec2-0-0-0-0.us-east-2.compute.amazonaws.com
   ```
3. To find the Public IPv4 DNS:
   - Click on your EC2 instance from the dashboard.
   - Locate and copy the Public IPv4 DNS from the Instance Summary.

## Creating AWS RDS Instance

### Step 1: Create AWS Account and Log into the Console
1. Navigate to [AWS Management Console](https://aws.amazon.com/console/).
2. Create an account if you do not already have one, or log in with your existing account.

### Step 2: Navigate to RDS
1. In the AWS Management Console, find and select RDS under the "Services" menu.

### Step 3: Create a Database
1. Click on "Create Database" and follow the below configuration.

#### Configuration Used:
- **Database Creation Method**: Standard Create
- **Engine Options**: MySQL
  - Engine Version: MySQL 8.0.39
- **Templates**: Production
- **Availability and Durability**: Multi-AZ DB Cluster
- **Settings**: Name your RDS Instance and provide a master username (e.g., `admin`).
- **Instance Configuration**: Standard classes with db.m5d.large
- **Storage**: General Purpose SSD (gp3) with 200GiB
- **Connectivity**:
  - Select "Connect to an EC2 compute resource."
  - Choose your EC2 Instance from the dropdown box.
- **Remaining Configurations**: Leave as default.

2. Click "Create Database."
3. AWS will link your EC2 Instance to your RDS Instance upon boot.

## Steps to Run Server with App

### Step 1: Make Slack App Using Slack API
1. Go to [Slack API Apps](https://api.slack.com/apps).
2. Click "Create New App."
3. Select "From a manifest" for configuration.
4. Choose a workspace to develop your app in.
5. Copy the content from your `manifest.json` file and paste it into the provided field.
   - If you encounter an error with the `request_url`, ensure it matches the regex pattern: `^https?://`.
6. Review the summary and click "Create."

By following these steps, you will have set up an AWS EC2 instance, created an RDS instance, and configured a Slack app.
