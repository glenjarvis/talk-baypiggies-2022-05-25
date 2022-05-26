# Demo 1

Demo 1: Using boto library to build instances


1. [Create VPC with Web UI GUI](https://us-east-1.console.aws.amazon.com/vpc/home?region=us-east-1)
   
  ![VPC Creation Image 1](vpc_creation_01.png?raw=true "VPC Creation")
  ![VPC Creation Image 2](vpc_creation_02.png?raw=true "VPC Creation")
  ![VPC Creation Image 3](vpc_creation_03.png?raw=true "VPC Creation")


2. [Create a security group](https://us-east-1.console.aws.amazon.com/ec2/v2/home?region=us-east-1#SecurityGroups:) that allows the following incoming:

| Port | Addresses|
| --- | --- |
| 22 | Incoming for your IP address only |
| 80 | For any IP Address: 0.0.0.0/0 |
  

3. [Create an SSH key pair](https://us-east-1.console.aws.amazon.com/ec2/v2/home?region=us-east-1#KeyPairs:) with name 'baypiggies-demo'


4. Change `create_ec2.py` so that these fields match what you have created:

# baypiggies-demo-subnet-public1-us-east-1a
SUBNET = "subnet-xxxxxx"

# baypiggies-demo-security-group
SECURITY_GROUP = "sg-xxx"

5. [Ensure you have an Access Key and Secret Access Key](https://us-east-1.console.aws.amazon.com/iamv2/home#/users)

IAM is preferred over root Access Keys. Substitute your IAM username to jump to security_credentials:
https://us-east-1.console.aws.amazon.com/iam/home#/users/<< Your IAM Username >>?section=security_credentials

Example: These are not valid keys:
```
$ export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
$ export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

6. Ensure that you have instlled ../requirements.txt


7. Execute `create_ec2.py`

