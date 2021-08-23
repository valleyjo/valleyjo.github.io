---
layout: page
permalink: /experience/
title: Experience
---
Here's a more comprehensive list of my experience:

<ul>
  <li>
    <b>Software Engineering Interviewer</b> - <i>Fall 2018 / Current</i>
    <p>I've conducted over 60 software engineering interviews at Microsoft. These have been for positions from intern to senior level for both college and industry candidates.</p>
  </li>
  <li>
    <b>Azure Compute</b> - <i>Winter 2018 / Current</i>
    <p>In Azure Compute I work on low-level, low-latency, high-reliability distributed systems. These systems are fundamental to Azure's core capabilities. Everything in Azure including other Microsoft offerings are built on top of these systems.</p>
    <ol>
      <li>Implemented distributed tracing across several micro-services</li>
      <li>Implemented PXE packet forwarding for Azure host machines to facilitate a control plane physical host migration</li>
      <li>Built a fault domain monitoring service to ensure acceptable physical machine placement for control plane services</li>
      <li>Built a capacity management service for control plane services that controls automatic ordering of new machines</li>
      <li>Worked on a filtered message delivery system built on top of Apache Kafka for low-latency high-fan out scenarios</li>
      <li>Working on the next generation container management platform for Azure Compute</li>
      <ol>
        <li>Built notifications for customers when their container experiences availability issues</li>
        <li>Built integration with the deployment health system to ensure containers remain healthy when new bits roll out</li>
        <li>Built container repair capabilities to recover containers when they become faulted</li>
      </ol>
    </ol>
  </li>
  <li>
    <b>OneDrive - Desktop Sync Client</b> - <i>Spring 2016 / Fall 2017</i>
    <p>This work was in C++, Objective-C, Win32, Cocoa and QT. I was granted a patent for my work on "Known Folder Backup".</p>
    <p>Here are the features I worked on:</p>
    <ol>
      <li>Desktop UI for syncing a SharePoint teamsite via the OneDrive client</li>
      <li>Many accessability fixes (I was the "Accessibility Champ")</li>
      <li>Command line configurability for admins to set up OneDrive on first login</li>
      <li>Screen shot upload for Mac (I built this as a bonus project and functioned as the PM for it too)</li>
      <li>The UI for automatic backup for Windows "Known Folders" (Desktop, Documents & Pictures)</li>
    </ol>
    <br>
  </li>
  <li>
    <b>OneDrive for Business - Desktop Sync Client</b> - <i>Fall 2015 / Spring 2016</i>
    <p>When I came back to Microsoft after my internship I was placed on a small maintenance team for the "old" OneDrive sync engine. I switched teams to the "new" sync engine after six months.</p>
  </li>
  <li>
    <b>OrgMan</b> - <i>Fall 2014 / Spring 2015</i>
    <p>To better manage student organizations I implemented a organization management webapp using Ruby on Rails. It had some custom features like announcements, contact information management, meeting organization and an attendance tracker.</p>
  </li>
  <li>
    <b>MIPS CPU</b> - <i>Fall 2014</i>
    <p>For one of my senior year computer engineering courses, I implemented a MIPS CPU. It featured five pipelines, L1-3 cache, instruction forwarding and implemented the MIPS instruction set.</p>
  </li>
  <li>
    <b>Software Development Engineer (Microsoft)</b> - <i>Summer 2014 Internship</i>
    <p>For a long time I have wanted to work at a top tech company. I am happy to report that I accepted a software engineering internship position with Microsoft!! I worked on the <a href="http://onedrive.com">OneDrive</a> team where I built notifications for users with expired/expiring bonus storage. My code is run about 3.5 million times a day (1000 times a second) and it maintains a quality of service of 99.998%. At the conclusion of my internship I was offered a full time position which I ended up accepting in August of 2014!</p>
  </li>
  <li>
    <b>Software Engineer (KIT Solutions)</b> - <i>Summer 2013 internship</i>
    <p>For summer 2013 I worked as a software engineer at KIT Solutions where I built a time sheet web app! This app is no ordinary time sheet, it integrates with active directory to add and remove users and keep each employee's profile up to date, all automatically! I used .Net MVC and C# to build the app. As a time sheet, the app's primary feature is to track the time employees work on individual contracts and projects which will help to better price services to clients.</p>
  </li>
  <li>
    <b>Personal Data Report</b>: I have been interested in personal data for a long time. In 2013 I created this personal data report using D3.js. I only had a small amount of data but the project was super fun. I was inspired by <a href="http://jehiah.cz/one-two/">Jehiah Czebotar's Personal Annual Reports</a>.<br>
    <a href=""><div class="color-button">live demo</div></a><a target="_blank" href="https://github.com/valleyjo/valleyjo.github.io/blob/ad53801e61da4701672753f3c1baff59d251a72c/js/pdr.js"><div class="color-button">code</div></a>
  </li><br>
  <li>
    <b>Weight Calculator</b>: I have put the wrong weight on the barbell while weight lifting too many times. So many that I decided to make this little barbell weight calculator to assist me. Before I had most weight combinations in my range memorized, I did use this calculator a bit to double check.<br>
    <a href="{{ "/projects/barbell-weight-calculator" | prepend: site.base_url }}"><div class="color-button">live demo</div></a><a target="_blank" href="https://github.com/valleyjo/valleyjo.github.io/blob/ad53801e61da4701672753f3c1baff59d251a72c/js/weightcalc.js"><div class="color-button">code</div></a>
  </li>
</ul>