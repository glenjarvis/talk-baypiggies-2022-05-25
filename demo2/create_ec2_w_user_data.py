#!/usr/bin/env python3

# Documentation for boto3:
# https://boto3.amazonaws.com/v1/documentation/api/latest/reference/\
#     services/ec2.html#EC2.Client.run_instances

"""Demo 2 for Bay Area Python Interest Group (BAyPIGgies) Talk

Talk Date: 2022-05-26

This builds upon the previous Demo (basic creation of EC2 instance) via
Boto. However, we now add 'UserData': to our example.
"""

import base64
import boto3


# This is the "script" that will be executed if we pass it as a value
# to 'UserData' in the run_instances function:
USER_DATA = """#!/usr/bin/env python3
with open('/tmp/is_this_thing_on.txt', 'w') as demo_fp:
    demo_fp.write("There should be one-- ")
    demo_fp.write("and preferably only one ")
    demo_fp.write("--obvious way to do it.")
"""

# VPC previously setup. This (like almost all AWS infrastructure can
# also be created with the boto3 library).
# It was created with GUI (see images in this directory) to demonstrate
# VPC GUI.
#
# You only need to specify the Subnet, it is attached to VPC
#
# Note: Be sure to pick a public subnet for this demo
# baypiggies-demo-subnet-public1-us-east-1a
SUBNET = "subnet-06a48f59fa5d0b674"

# amzn2-ami-kernel-5.10-hvm-2.0.20220426.0-x86_64-gp2
# Amazon Linux 2 (Could easily choose Ubuntu, etc. instead)
AMI = "ami-0022f774911c1d690"

# baypiggies-demo-security-group
# SSH (port 22) *only* from Glens Office
# HTTP (Port 80) from anywhere 0.0.0.0/0
SECURITY_GROUP = "sg-0d53ca68a605d2eee"


KEY_NAME = 'baypiggies-demo'


HARD_DISKS = [
    {
        'DeviceName': '/dev/xvda',
        'Ebs': {
            'DeleteOnTermination': True,
            'VolumeSize': 8,
            'VolumeType': 'gp2'
        },
    },
]

client = boto3.client('ec2', region_name='us-east-1')

response = client.run_instances(
    BlockDeviceMappings=HARD_DISKS,
    ImageId=AMI,
    KeyName=KEY_NAME,
    InstanceType='t2.micro',
    UserData=base64.b64encode(USER_DATA.encode('ascii')),
    MaxCount=1,
    MinCount=1,

    NetworkInterfaces=[
        {
            'DeviceIndex': 0,
            'SubnetId': SUBNET,
            'Groups': [SECURITY_GROUP],
            'AssociatePublicIpAddress': True
        }
    ],
    TagSpecifications=[
        {
            'ResourceType': 'instance',
            'Tags': [
                {
                    'Key': 'Name',
                    'Value': 'baypiggies-server',
                },
                {
                    'Key': 'Purpose',
                    'Value': 'Demo User Data',
                },
                {
                    'Key': 'Environment',
                    'Value': 'QA',
                },

            ],
        },
    ],
)


INTERESTING_KEYS = [
    "InstanceType", "KeyName", "PrivateDnsName", "PrivateIpAddress",
    "PublicDnsName", "State", "Hypervisor", "RootDeviceName",
    "PrivateIpAddres", "PublicDnsName", "State"]

for instance in response['Instances']:
    print(f"Instance ID: { instance['InstanceId'] }")
    for key in instance.keys():
        if key in INTERESTING_KEYS:
            print(f"\t{ key }: { instance[key] }")

    print("\n\n\tConnect: ssh -i baypiggies-demo.pem  "
          "ec2-user@<< instance['PublicDnsName'] >>\n")
