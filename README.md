# Install Libvirt library for PHP 

Install dependencies.
```bash
sudo apt-get update
sudo apt-get install -y igcc make perl libxml2 xsltproc
```

Download library from libvirt official repo.
```bash
wget https://download.libvirt.org/php/libvirt-php-0.5.8.tar.xz
```

Uncompress and get in the library directory.
```bash
xz -d libvirt-php-0.5.8.tar.xz
tar xf libvirt-php-0.5.8.tar
```

Run `configure` script to check all required dependencies.
```
./configure
```

Compile and install the library.
```bash
make
sudo make install
```

Run the following command to check if it was installed successfuly.
```bash
php -i
```
