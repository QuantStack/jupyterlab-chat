import { IThemeManager, ReactWidget } from '@jupyterlab/apputils';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';
import React from 'react';

import { Chat } from '../components/chat';
import { WebSocketHandler } from '../handlers/websocket-handler';
import { chatIcon } from '../icons';

export function buildChatSidebar(
  chatHandler: WebSocketHandler,
  themeManager: IThemeManager | null,
  rmRegistry: IRenderMimeRegistry
): ReactWidget {
  const ChatWidget = ReactWidget.create(
    <Chat
      chatModel={chatHandler}
      themeManager={themeManager}
      rmRegistry={rmRegistry}
    />
  );
  ChatWidget.id = 'jupyterlab-chat::side-panel';
  ChatWidget.title.icon = chatIcon;
  ChatWidget.title.caption = 'Jupyterlab Chat'; // TODO: i18n
  return ChatWidget;
}
