import { Events } from 'discord.js';
import { Event } from '../interfaces';

const event: Event = {
    name: Events.ClientReady,
    once: true,
    execute: async (client) => {
        // eslint-disable-next-line no-inline-comments
        client.deploy(); // Deploy commands
        console.log(`Ready! Logged in as ${client.user?.tag} (${client.user?.id})\n`);
    },
};

export default event;