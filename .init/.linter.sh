#!/bin/bash
cd /home/kavia/workspace/code-generation/futurist-portfolio-for-harisankar-r-n-r-176202-176211/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

