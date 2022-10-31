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


