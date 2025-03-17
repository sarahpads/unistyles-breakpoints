When using breakpoint tokens to configure the Display component, both of the following `mq`s evaluate to true when the device width is the exact same as `tablet`:

`mq.only.width('mobile', 'tablet')`

`mq.only.width('tablet')`

 This makes it difficult to cleanly support exclusive mobile/tablet views. When using named breakpoints, it would be cleaner if the maxWidth was one less to ensure the above `mq`s do not overlap.

### Steps to reproduce
1. `npm run ios` - select iPad Air 13-inch
2. Load the app in Portrait
3. Observe that both Display components renders their children
4. Rotate to Landscape
5. Observe that only the larger Display renders children
