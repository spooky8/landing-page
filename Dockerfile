FROM node:22-alpine AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .

#RUN yarn install
RUN npm i

# Copy app files
COPY . .

CMD ["npm", "run" ,"build"]
