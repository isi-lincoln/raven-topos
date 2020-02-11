#!/bin/bash

set -e

if [[ $UID -ne 0 ]]; then
  echo "must be root"
  exit 1
fi

echo "destroying any exiting topologies"
rvn destroy

echo "building topology"
rvn build

echo "deploying topology"
rvn deploy

echo "waiting for topology to come up"
rvn pingwait a b c d s1

echo "configuring topology"
rvn configure
rvn status

sudo ansible-playbook -i .rvn/ansible-hosts configure-network.yml
sudo ansible-playbook -i .rvn/ansible-hosts configure-nodes.yml
