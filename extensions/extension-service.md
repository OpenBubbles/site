# Extension Service

Return an IMadridExtension on bind. AIDL files can [be found on GitHub.](https://github.com/OpenBubbles/openbubbles-app/tree/rustpush/android/app/src/main/aidl/com/bluebubbles/messaging).

## Android manifest properties (meta-data)

* `madrid_name`: User-facing app name (developer mode only)
* `madrid_id`: iOS app store ID (url: .../gamepigeon/id**1124197642**) (developer mode only)
* `madrid_bundle_id`: iOS Bundle/Team ID: `com.apple.messages.MSMessageExtensionBalloonPlugin:[team id]:[bundle id]` (developer mode only)
* `madrid_icon`: User-facing extension icon (may differ from iOS)

## IMadridExtension (extension-implemented)

### `keyboardOpened`
```java
RemoteViews keyboardOpened(in IViewUpdateCallback callback, in IKeyboardHandle handle);
```
Called when the keyboard is opened. Returns the View to be shown, along with an update handle and keyboard handle.

### `keyboardClosed`
```java
void keyboardClosed();
```
Keyboard is now closed.

### `didTapTemplate`
```java
void didTapTemplate(in MadridMessage message, in IMessageViewHandle handle);
```
The user has tapped your message in the message view.

### `getLiveView`
```java
RemoteViews getLiveView(in IViewUpdateCallback callback, in MadridMessage message, in IMessageViewHandle handle);
```
Return the view for a message in the chat stream or send box.

### `messageUpdated`
```java
void messageUpdated(in MadridMessage message);
```
An extension message has been updated. Update any external UI accordingly. Live views will be auto-refreshed.

## IKeyboardHandle (OpenBubbles-implemented)
A handle to an open keyboard session
### `addMessage`
```java
void addMessage(in MadridMessage message);
```
Add a custom message to the send box.

## IMessageViewHandle (OpenBubbles-implemented)
A handle to a visible message
### `updateMessage`
```java
void updateMessage(in MadridMessage message, in ITaskCompleteCallback callback);
```
Update this message. Callback is invoked when the update is complete.

### `lock`
```java
void lock();
```
Keep this handle alive after the tap has completed or the live message is no longer visible. Use when launching external activities. Make sure to call `unlock` when you are done!

### `unlock`
```java
void unlock();
```
Unlock a locked handle. Releases resources and cleans up.

## MadridMessage (parcelable)
### `String messageGuid`
Message GUID (randomly generated UUID)
### `String? ldText`
Alternate text
### `String url`
Message URL (opened when tapped)
### `String? session`
Session UUID (generated for updating a message, kept same for all updates)
### `boolean isLive`
True for `MSMessageLiveLayout`, false for `MSMessageTemplateLayout`

### Template layout (MSMessageTemplateLayout)
See description for these at https://developer.apple.com/documentation/messages/msmessagetemplatelayout
#### `String? imageBase64`
A base64-encoded image
#### `String? imageSubtitle`
Image subtitle
#### `String? imageTitle`
Image title
#### `String? caption`
Caption
#### `String? secondaryCaption`
Secondary Caption
#### `String? tertiaryCaption`
Tertiary Caption
#### `String? subcaption`
Subcaption

## ITaskCompleteCallback
Generic Callback
### `complete`
```java
void complete();
```
It's complete!


## IViewUpdateCallback (OpenBubbles-implemented)
### `updateView`
```java
void updateView(in RemoteViews views);
```
Update an existing view with a new layout.

