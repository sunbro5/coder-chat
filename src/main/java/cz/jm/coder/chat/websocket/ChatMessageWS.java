package cz.jm.coder.chat.websocket;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ChatMessageWS {

    String userName;
    String toUserName;
    int messageId;
    ChatMessageEventType type;
}
