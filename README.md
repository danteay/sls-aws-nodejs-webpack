# NodeJS and webpack serverless project

## Requirements

- [Serverless CLI](https://serverless.com/framework/docs/getting-started/)
- NodeJS >= 12

## Test Lambda functions

To test lambda functions locally you need run the next command:

```console
$ sls invoke local \
> --function {func_name} \
> [-d '{ "data": "hello world" }']
```

This will execute only the configured lambda function without
http routing.

## Test API Gateway

If you want to interact with a rest API created with API
Gateway, first you need to start the offline server:

```console
sls offline start
```

This will start the server and provide a URL to hit the
endpoints and trigger the lambda functions.
