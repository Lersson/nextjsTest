# FROM node:18-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # Install dependencies based on the preferred package manager
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
#   else echo "Lockfile not found." && exit 1; \
#   fi


# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# # ENV NEXT_TELEMETRY_DISABLED 1


# RUN \
#   if [ -f yarn.lock ]; then yarn run build; \
#   elif [ -f package-lock.json ]; then npm run build; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

# # Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV http_proxy http://proxy.prodemge.gov.br:8080
# ENV https_proxy http://proxy.prodemge.gov.br:8080
# ENV no_proxy 10.0.0.0,localhost,127.0.0.1,10.0.0.0/24

# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /app/public ./public

# # Set the correct permission for prerender cache
# RUN mkdir .next
# RUN chown nextjs:nodejs .next

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# # server.js is created by next build from the standalone output
# # https://nextjs.org/docs/pages/api-reference/next-config-js/output
# CMD HOSTNAME="0.0.0.0" node server.js




# Use the official Ubuntu base image from Docker Hub
FROM ubuntu:latest

WORKDIR /app
# ENV http_proxy http://proxy.prodemge.gov.br:8080
# ENV https_proxy http://proxy.prodemge.gov.br:8080
# ENV no_proxy 10.0.0.0,localhost,127.0.0.1,10.0.0.0/24

# Update package lists and install any upgrades available for existing packages
RUN apt-get update && apt-get install -y \
    curl \
    nano \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

COPY . .

# Install any necessary packages
# Example:
# RUN apt-get install -y package_name

# (Optional) Set environment variables if needed
# ENV KEY=value

# (Optional) Set the working directory inside the container
# WORKDIR /path/to/working/directory

# (Optional) Expose any ports the app may need
# EXPOSE port_number

# (Optional) Copy files from your host to your image filesystem
# COPY /path/on/host /path/in/container

# (Optional) Run any commands required to set up your image
# For example, to start a service:
# CMD ["service", "service_name", "start"]

# (Optional) Set the command to run your application
# CMD ["executable","param1","param2"]

# Example: Run bash when the container launches
# CMD ["bash"]
CMD ["tail", "-f", "/dev/null"]
