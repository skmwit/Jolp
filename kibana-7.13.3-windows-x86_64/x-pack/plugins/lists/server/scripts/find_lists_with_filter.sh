#!/bin/sh

#
# Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
# or more contributor license agreements. Licensed under the Elastic License
# 2.0; you may not use this file except in compliance with the Elastic License
# 2.0.
#

set -e
./check_env_variables.sh

PAGE=${1-1}
PER_PAGE=${2-20}
FILTER=${3-type:ip}
# Example: ./find_lists_with_filter.sh 1 20 type:ip
curl -s -k \
 -u ${ELASTICSEARCH_USERNAME}:${ELASTICSEARCH_PASSWORD} \
 -X GET "${KIBANA_URL}${SPACE_URL}/api/lists/_find?page=${PAGE}&per_page=${PER_PAGE}&filter=${FILTER}" | jq .
