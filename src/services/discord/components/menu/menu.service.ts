import { Injectable } from '@nestjs/common';
import { Track } from 'discord-player';
import {
  ActionRowBuilder,
  MessageActionRowComponentBuilder,
  Role,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} from 'discord.js';
import { StringSelect, Context, StringSelectContext, SelectedStrings } from 'necord';
@Injectable()
export class MenuService {
  public createStringSelectMenu(results: Track<unknown>[]) {
    const options = results.map((track, index) => ({
      label: track.title,
      description: `Duration: [${track.duration}] || Author: ${track.author}`,
      value: `${index}`,
    }));

    console.log(options)

    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId('search-menu')
      .setPlaceholder('Select a track')
      .setMaxValues(1)
      .setMinValues(1)
      .setOptions(options);
    return new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(selectMenu);
  }

  public createMessageRoleSelectMenu(roles: Role[]) {
    try {
      console.log()
      const options = roles.map((role) => ({
        label: role.name,
        value: role.id, 
      }));

      console.log('Select Menu Options:', options); 

      const selectMenu = new StringSelectMenuBuilder()
        .setCustomId('role-select-menu')
        .setPlaceholder('Select a role')
        .setMinValues(1)
        .setOptions(options);

      return new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(selectMenu);
    } catch (error) {
      console.error('Error creating select menu options:', error);
      throw error;
    }
  }
}
