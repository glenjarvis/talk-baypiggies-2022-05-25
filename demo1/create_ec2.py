#!/usr/bin/env python3

# Documentation for boto3:
# https://boto3.amazonaws.com/v1/documentation/api/latest/reference/\
#     services/ec2.html#EC2.Client.run_instances

"""Demo 1 for Bay Area Python Interest Group (BAyPIGgies) Talk

Talk Date: 2022-05-26

This shows a very basic creation of an EC2 instance using the boto3
library.  However, what is intentionally missing from this demo is any
use of UserData.
"""

import boto3


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
                    'Value': 'Demo',
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

# Here are some example Network Interface key/values. Note this was immediately
# after instance started and there is no PublicKey yet:
#
#  NetworkInterfaces:
# [
#     {'Attachment': {
#         'AttachTime':  datetime.datetime(
#             2022, 5, 26, 2, 31, 42, tzinfo=tzutc()),
#         'AttachmentId': 'eni-attach-0fcbee283864b0c34',
#         'DeleteOnTermination': True,
#         'DeviceIndex': 0,
#         'Status': 'attaching',
#         'NetworkCardIndex': 0},
#      'Description': '',
#      'Groups': [
#          {'GroupName': 'baypiggies-demo-security-group',
#           'GroupId': 'sg-0d53ca68a605d2eee'}
#      ],
#      'Ipv6Addresses': [],
#      'MacAddress': '12:d2:54:7b:7b:8f',
#      'NetworkInterfaceId': 'eni-00eef36a8c9b2af92',
#      'OwnerId': '<snipped from output>',
#      'PrivateDnsName': 'ip-10-0-2-77.ec2.internal',
#      'PrivateIpAddress': '10.0.2.77',
#      'PrivateIpAddresses': [
#          {'Primary': True,
#           'PrivateDnsName': 'ip-10-0-2-77.ec2.internal',
#           'PrivateIpAddress': '10.0.2.77'}
#      ],
#      'SourceDestCheck': True,
#      'Status': 'in-use',
#      'SubnetId': 'subnet-06a48f59fa5d0b674',
#      'VpcId': 'vpc-0ff6960cb9cc7d360',
#      'InterfaceType': 'interface'}
# ]
#

for instance in response['Instances']:
    print(f"Instance ID: { instance['InstanceId'] }")
    # Uncomment next line to drop into debugger to examine 'instance'
    # import pdb; pdb.set_trace()
    for key in instance.keys():
        if key in INTERESTING_KEYS:
            print(f"\t{ key }: { instance[key] }")

    print("\n\n\tConnect: ssh -i baypiggies-demo.pem  "
          "ec2-user@<< instance['PublicDnsName'] >>\n")
