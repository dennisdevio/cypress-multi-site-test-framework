# Cypress Multi-site Test Framework
This project was made to demonstrate how to set up a multi-site test framework with Cypress.


# Setting up Cypress
This project was set up and run on Linux Mint, based on Ubuntu 20.04. To install Cypress in a Linux environment there are a few dependencies required, these are listed below:

List of dependencies:

```
libgtk2.0-0
libgtk-3-0 
libgbm-dev 
libnotify-dev 
libgconf-2-4 
libnss3 
libxss1 
libasound2 
libxtst6 
xauth 
xvfb
```


To install these dependencies simply run the following command from the root folder of your project: 

```
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Next we need to install node.js. 

To get the reqiured version, 12 or above, we need to add the [PPA](https://github.com/nodesource/distributions/blob/master/README.md) which is maintained by NodeSource and install it from there.

I installed the LTS version with the following command:

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

To verify the installation run 

```
node -v
```

You should see the following output

```
v16.18.0
```

The last requirement is npm. 

However installing from the PPA above installs npm along with node.js.


# Running Tests

To run cypress type thw following command

```
npx cypress open
```

To record tests with cypress type the following command

```
npx cypress run --record --key 'your-recording-key'
```

To run cypress only from the command line type the following command

```
npx cypress run --headless
```

# Results and conclusion

I set up a spec to change the website language cookie.
It consisted of four tests:

* Go to website
* Get the language cookie
* Set new cookie
* Reload page

The first and last tests passed but the second and third test failed.

Since this is my first time working with Cypress it could have gone better.

However I

* Set up the prequisites for installing Cypress and running on Linux
* Installed on my Linux environment
* Wrote tests
* Ran the tests
* Recorded the tests
* Published the results on my GitHub and Cypress Dashboard

With a bit more hands on experience and opportunity to explore the Cypress tool I could definitely see myself mastering it quite well and working with as it is a great tool to use for testing applications










