## Description

Profile badge for codeforces & atcoder & topcoder

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Using docker container
```bash
$ docker run -d -p 3000:3000 --name psbadge sweatpotato/psbadge
```

## Example

* Codeforce
```
http://api.cutewisp.com/v1.0/cf/{handle}
```
![SS](http://api.cutewisp.com/v1.0/cf/CuteWisp)

* atcoder
```
http://api.cutewisp.com/v1.0/ac/{handle}
```
![SS](http://api.cutewisp.com/v1.0/ac/CuteWisp)

* Topcoder
```
http://api.cutewisp.com/v1.0/tc/{handle}
```
![SS](http://api.cutewisp.com/v1.0/tc/handle)
