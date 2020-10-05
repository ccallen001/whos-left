# Who's Left?

A Chrome extension for Google Meet to see who's left

## Installation

0. Clone this repo to your machine.
1. Using Chrome, open the Extension Management page by navigating to chrome://extensions; the Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode (top right).
3. Click the "Load unpacked" button (top left), find this cloned repo in the list and Select it.
4. Ta-da! The extension has been successfully installed. Because no icons were included in the manifest, a generic toolbar icon will be created for the extension.

## Usage

0. To use the extension properly, you'll need everyone in your Google Meet call to have the extension installed and running BEFORE starting the meeting.
1. When you get in to your Google Meet room, as long as there is one other person, you'll notice a button in the top left of your screen that says "Toggle Gone Status"
2. The button will initially be red because the extension assumes that you have not gone yet
3. You will also notice that participant names in the bottom left of the participant windows are red, indicating that that participant has not yet gone
4. Once you have gone, click the "Toggle Gone Status" button
5. The button will turn green and your participant name will show green on other people's screens

**tl;dr:** Open Google Meet, click the button once you've gone, look at people's names to see if they've gone (green) or haven't (red)
