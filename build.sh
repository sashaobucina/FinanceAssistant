#!/usr/bin/env bash

cd backend
npm run all
cd .. && cd react-frontend
npm run all
cd ..