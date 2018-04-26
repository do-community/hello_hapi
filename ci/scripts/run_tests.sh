#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules hello_hapi
cd hello_hapi && npm test
