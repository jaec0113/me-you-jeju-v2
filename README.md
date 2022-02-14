This is the expanded version of the Me, You, and Jeju podcast website.

This site is built using HTML5, CSS3, Tailwind CSS, and GSAP (Javascript animation library). It is hosted on Netlify (free tier) and the custom URL is purchased through GoDaddy. There is an online repository on Github.

The file format looks like:
Directory (me-you-jeju-v2)
  -- images
    -- link-imgs
      -- robert-heff.jpg
    -- favicon.ico (Me, You, and Jeju pod favion file)
    -- logo.png (Me, You, and Jeju pod logo file)
    -- meta-image.png (Me, You, and Jeju pod image for metasearches)
  -- links
    -- index.html (page for links)
  -- node_modules
  -- index.html (homepage)
  -- output.css (created styles from Tailwind CSS)
  -- main.css (custom CSS properties)
  -- package.json (commands and dependencies)
  -- package-lock.json
  -- tailwind.config.js (configuration for Tailwind CSS)
  -- animations.js (Javascript file for animations)

Compared to the original site, this version has a few changes.
<ol>
  <li>V2 has used Tailwind CSS for slightly simpler ease of use plus greater consistency in styles.</li>
  <li>V2 has a folder for the link page that is being added.</li>
  <li>V2 has an added folder with the images folder for all images related to links to articles.</li>
  <li>A Javascript file for simple animations</li>
</ol>

<h3>Understanding the HTML file layout</h3>
Each HTML page has a 'head' and 'body' section. The 'head' contains information for the browser - what the contents are, keywords, where the styles are, and so on. The 'body' section is where all of the data that is actually displayed on the screen is found.

The main HTML file should not need any updating unless social media accounts are changed (currently no link to Twitter account) or where people can listen to the podcast changes.

<h3>The Link HTML file layout</h3>
For the future, the link HTML file is the more important file to understand as it will be continuously be updated as new episodes come out. Each episode is divided into a 'section' that contains an h3 title that lists the episode number, an h4 subtitle for the guest/main topic for that episode, and a 'div' that holds the links for that episode. Within that div is an image and 'a' (anchor) tag. The image has an 'src' property, this points to the location of the file for the image. For simplicity these images are all hosted locally in the images/link-imgs folder. The 'atl' property is supposed to contain some text that is displayed if for some reason the image itself does not work. It is also what is read if a person is using a screen reader. The anchor tag has an 'href' property that contains the actual link URL. It should be written in full (including the https://www part). The text between the opening and closing tags is the text that is displayed on the screen.

    <section>
      <h3>Epsiode Number</h3>
      <h4>Main Guest/Topic</h4>
      <div>
        <img src="path/to/file.jpg" alt="text related to the image">
        <a href="https://www.link-url.com">Article Link</a>
      </div>
    </section>

This section is where any copy/pasting will happen to create new episodes and links. The whole section will be copied to create a new episode section. 

    <section>
      <h3>Epsiode 18</h3>
      <h4>Robert Neff</h4>
      <div>
        <img src="path/to/file.jpg" alt="text related to the image">
        <a href="https://www.link-url.com">Article Link</a>
      </div>
    </section>

    <section>
      <h3>Epsiode 17</h3>
      <h4>Rachel Stine</h4>
      <div>
        <img src="path/to/file.jpg" alt="text related to the image">
        <a href="https://www.link-url.com">Article Link</a>
      </div>
    </section>

If you want to have multiple images (one image for an episode corner) then within the episode section you would copy the 'div' section. 

    <section>
      <h3>Epsiode 18</h3>
      <h4>Robert Neff</h4>
      <div>
        <img src="path/to/file1.jpg" alt="text related to the image">
        <a href="https://www.link-url.com">Article Link</a>
      </div>
      <div>
        <img src="path/to/file2.jpg" alt="text related to the image">
        <a href="https://www.link-url.com">Article Link</a>
      </div>
    </section>

If you want to have multiple links (but only one image) then just copy the anchor tag.

    <section>
      <h3>Epsiode 18</h3>
      <h4>Robert Neff</h4>
      <div>
        <img src="path/to/file.jpg" alt="text related to the image">
        <a href="https://www.link-url1.com">Article Link 1</a>
        <a href="https://www.link-url2.com">Article Link 2</a>
        <a href="https://www.link-url3.com">Article Link 3</a>
      </div>
    </section>

<h3>Tailwind CSS Basics</h3>
Tailwind CSS uses a large number of pre-made stylings to allow for greater consistency. To apply a style to an HTML element add the appropriate tag within the opening bracket for the element. Custom styles can be applied either through the main.css file as a custom class OR by extending the existing Tailwind class in the tailwind.config.js file.

Tailwind CSS automatically builds the necessary CSS file (output.css) by combining any custom CSS in the main.css file PLUS the basics that Tailwind CSS includes. This Tailwind CSS configuration file also has a command set to look through the html files, see what Tailwind classes are being used, and to delete any unused Tailwind classes in order to minimize the file size.

