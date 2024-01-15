# Me, You, and Jeju Version 3

## Site description
This site is built using HTML5, CSS3, Tailwind CSS, and GSAP (Javascript animation library). It is hosted on Netlify (free tier) and the custom URL is purchased through GoDaddy. There is an online repository on Github.

## Me, You, and Jeju version 3 directory format
Directory (me-you-jeju-v2)
  -- images
    -- favicon.ico (Me, You, and Jeju podcast favicon file)
    -- logo2.png (new Me, You, and Jeju podcast logo file)
    -- meta-image.png (Me, You, and Jeju podcast image for metasearches)
    -- link-imgs
      -- robert-heff.jpg
      -- ... other images
  -- episode-notes
    -- index.html (page for current year episode links)
    -- 2022
      -- index.html (page for 2022 episode links)
    -- 2023
      -- index.html (page for 2023 episode links)
  -- node_modules (required files)
  -- index.html (homepage)
  -- main.css (CSS files)
  -- package.json (commands and dependencies)
  -- package-lock.json
  -- animations.js (GSAP animations for home page)
  -- animations2.js (GSAP animations for episode notes)

## Changes in version 3
- Folder for links by year
  - episode-links -> 2022, 2023
- Changes to theme colors
  - #67F663, #2484C6
- Episode link card redesign
- Removal of Tailwind CSS and implementation of vanilla CSS

## Understanding the homepage HTML file layout
Each HTML page has a 'head' and 'body' section. The 'head' contains information for the browser - what the contents are, keywords, where the styles are, and so on. The 'body' section is where all of the data that is actually displayed on the screen is found.

The homepage HTML file should not need any updating unless social media accounts are changed or where people can listen to the podcast changes.

## The Episode Notes HTML file layout
For the future, the link HTML file is the more important file to understand as it will be continuously be updated as new episodes come out. Each episode is divided into a 'section' that contains an h3 title that lists the episode number, an h4 subtitle for the guest/main topic for that episode, and a 'div' that holds the links for that episode. Within that div is an image and 'a' (anchor) tag. The image has an 'src' property, this points to the location of the file for the image. For simplicity these images are all hosted locally in the images/link-imgs folder. The 'atl' property is supposed to contain some text that is displayed if for some reason the image itself does not work. It is also what is read if a person is using a screen reader. The anchor tag has an 'href' property that contains the actual link URL. It should be written in full (including the https://www part). The text between the opening and closing tags is the text that is displayed on the screen.

    <article class="card">
      <h2 class="episode-number">Episode Number</h2>
      <section class="glass">
        <img class="episode-image" src="source" alt="alt text">
        <div class="episode-content">
          <h3 class="episode-title">Episode Title</h3>
          <div class="episode-link-container">
            <a class="episode-link" href="source url" target="_blank" rel="noopener noreferrer"><i class="appropriate icon"></i> Link name</a>
          </div>
        </div>
        <div class="episode-listening-options">
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fi fi-brands-youtube"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fi fi-brands-spotify"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fi fi-brands-apple"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fi fi-brands-google"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fi fi-ts-podcast"></i></a>
          </div>
        </div>
      </section>
    </article>

### Icons
Icons are from Flaticon and are as follows:
- YouTube: fi fi-brands-youtube
- Spotify: fi fi-brands-spotify
- Apple: fi fi-brands-apple
- App Store: fi fi-brands-app-store-ios
- Google: fi fi-brands-google
- Google Play: fi fi-brands-android
- Amazon Podcasts: fi fi-rr-podcast (appropriate Amazon logo is not available so it was replaced with a general podcast icon)
- Instagram: fi fi-brands-instagram
- X: fi fi-brands-twitter-alt
- Threads: TBD
- Facebook: fi fi-brands-facebook
- Website: fi fi-rr-browser
- Newspaper article: fi fi-rr-newspaper-open
- Email: fi fi-rr-envelope
- Book: fi fi-rr-book-alt