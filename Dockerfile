FROM node:20-alpine AS base
WORKDIR /app

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Bind to all interfaces
ENV HOST=0.0.0.0
# Port to listen on
ENV PORT=4321
# Just convention, not required
EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host"] # Start the app
