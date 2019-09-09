---
header-text:
categories:   azure mac
active-tab:   blog
layout:       post
title:        Upload to Azure Blob Store on a Mac
date:         2014-8-21 11:52:00
---

When I was doing the initial work required to host the assets for this website on the Windows Azure CDN I realized there was no good way to upload files to Azure Blob Store on a Mac. There are several good Azure Storage Explorer programs for Windows, and even some paid web based approaches, but no free options for Mac users.

I developed a python script that takes care of uploading files to Azure blob store that works well on Mac. It's simple to use and gets the job done. It doesn’t have a UI or anything fancy but it worked very well for getting my assets in the cloud.

Check out the full script [here](https://gist.github.com/valleyjo/02e3735b064818881727).


####Instructions
To use the upload script make sure you have the Azure Python API installed. You can find those instructions [here](http://azure.microsoft.com/en-us/documentation/articles/python-how-to-install/). Note that installing the Azure Python API this way installs it alongside python 2.7. It won't be available from any other python version.

Next, create a text file on your desktop that's delimited by new lines. The first line is your account name and the second is your account key. You can find your account key in the Azure web management portal by clicking "Storage"  clicking the name of your storage account you want to upload to, and then clicking "Manage Access Keys" at the bottom of the management interface.

After that, just run `python2.7 azure_upload.py <account_info.txt> <container_name> <file_path>`. This script gives the new blob the same name as the file itself. So uploading `alex.jpg` to the `images` container will give you a url like `http://alexv.blob.core.windows.net/images/alexv.jpg`.

I hope you find this script a useful way to upload to Azure Blob Storage from a Mac!

--Alex
