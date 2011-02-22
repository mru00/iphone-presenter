iPhone Remote
=============

mru <mru at sisyphus dot teil dot cc>


A simple web application that allows executing functions on the server
via a webinterface on the iPhone.

 * Written for Ubuntu, but may be easily adapted for other platforms.
 * Server written in pure Python.
 * Client is HTML/Javascript as Apple WebApp

![Screenshot](https://github.com/mru00/iphone-remote/blob/master/screenshot-1.png?raw=true "Screenshot")

![Screenshot](https://github.com/mru00/iphone-remote/blob/master/screenshot-2.png?raw=true "Screenshot")


Adding Commands
---------------

Add commands to the `Commands` class decorated as staticmethod.


    class Commands:

        @staticmethod
        def standby():
            """Standby"""
            pass

The doc string will be used as rendered text.


Then, add them to the HTML page. You can refer to a command with the
`${link("func-name")}` call in the `content` string.

    <h2>Audio</h2>

     <table>
      <tr>
       ${link("vol_down")}
       ${link("vol_up")}
      <tr>
       ${link("mute", colspan=2)}
     </table>


Installation
---------

=== On the PC


Download to some location and add `iphone-remote` to the 'Startup Applications'.

=== On the iPhone ===


Open `http://<<IP of the server:8000/` in Safari,
Select Bookmarks -> Add to Home Screen.


Architecture
------------

 - mako for HTML rendering
 - SimpleHTTPServer as server

Todo
----

 - Security
