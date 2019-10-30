Project Description:
Platform and Technology:
The Mobile-Only Web App shall be a React.js website written in either JavaScript or TypeScript. Mobx StateTree shall be used for state handling.
Other Frameworks and/ or technologies can be used without limitation.

Objective:
Complete the sample project as close to the specification as possible. If open questions arise feel free to always ask! The focus of the sample project is:
Creating the design as close to the prototype (https://xd.adobe.com/spec/0a33beea-2a52-4678-4558-804b0ce1c040-7c02/) as possible
Successfully use Mobx State Tree
Successfully wire-up an API (https://unsplash.com/developers)

What does the sample project do?
The Web-App shows a list of Entries. Each entry consists of:
Text
A color gradient
Three images

The Color Gradient is picket randomly from the four predefined gradients that can be found in the developer panel in the Adobe XD Prototype (link above, see Attachment1.jpg for more information).

A new entry can be added by entering text. Upon completion, the entry will be added to the list. The Unsplash API shall be called (https://unsplash.com/developers ) to get 3 images corresponding to the entered text. Those images will be added to the entry as seen in the XD Prototype. The API Calls shall be handled via an asynchronous action within Mobx State Tree (https://github.com/mobxjs/mobx-state-tree#asynchronous-actions ).

All entries and retrieved images shall be stored in the browsers cache.

Stretch Goal (if this is possible, otherwise skip):
A user can swipe an entry to the left to reveal a delete button with which the entry can be deleted without further notice.
