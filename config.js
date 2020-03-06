// Put member IDs in these for special perms, competely optional
const config = {
  owners: ['682990667328389186', '682990667328389186'],
  managers: ['682990667328389186'],
  admins: ['682990667328389186'],
  devs: ['682990667328389186', '682990667328389186'],
  mods: ['682990667328389186'],
  support: ['682990667328389186'],
  helpers: ['682990667328389186'],
  token: ["NjgyODQyOTEzNzU1MjM0MzI5.XmFUhw.Q_B56yelIszDXh0JUnSC9LqTA4s"],

  blacklisted: [],

  defaultSettings: {
    prefix: '-',
	language: 'en-US',
    modLogChannel: 'audit-log',
    modRole: 'Moderator',
    adminRole: 'Founder',
    muteRole: 'Muted',
    noPermissionNotice: 'true',
    deniedChannel: 'denied-suggestions',
	acceptedChannel: 'accepted-suggestions',
    welcomeChannel: 'welcome',
    welcomeMessage: 'Welcome to the server {{mention}}!',
    welcomeEnabled: 'true',
    pointsEnabled: 'true',
    logMessageUpdates: 'true',
    logChannelUpdates: 'true',
    logEmojiUpdates: 'false',
    logMemberUpdates: 'true',
    censor: '0',
    logModerated: 'true'
  },

  permLevels: [
    {
      level: 0,
      name: 'Blacklisted',

      check: () => true
    },

    {
      level: 1,
      name: 'User',

      check: (message) => !config.blacklisted.includes(message.author.id) || !config.globalBan.includes(message.author.id)
    },

    {
      level: 2,
      name: 'Moderator',

      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === client.getSettings(message.guild.id).modRole.toLowerCase())
          if (modRole && message.member.roles.has(modRole.id) || message.member.hasPermission('MANAGE_MESSAGES')) return true
        } catch (e) {
          return false
        }
      }
    },

    {
      level: 3,
      name: 'Administrator',

      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === client.getSettings(message.guild.id).adminRole.toLowerCase())
          if (message.member.roles.has(adminRole.id) || message.member.hasPermission('ADMINISTRATOR')) return true
        } catch (e) {
          return false
        }
      }
    },

    {
      level: 4,
      name: 'Server Owner',

      check: (message) => message.channel.type === 'text' ? (message.guild.ownerID === message.author.id) : false
    },

    {
      level: 5,
      name: 'Bot Helper',

      check: (message) => config.helpers.includes(message.author.id)
    },

    {
      level: 6,
      name: 'Bot Support',

      check: (message) => config.support.includes(message.author.id)
    },

    {
      level: 7,
      name: 'Bot Moderator',

      check: (message) => config.mods.includes(message.author.id)
    },

    {
      level: 8,
      name: 'Bot Dev',

      check: (message) => config.devs.includes(message.author.id)
    },

    {
      level: 9,
      name: 'Bot Admin',

      check: (message) => config.admins.includes(message.author.id)
    },

    {
      level: 10,
      name: 'Bot Manager',

      check: (message) => config.admins.includes(message.author.id)
    },

    {
      level: 11,
      name: 'Bot Owner',

      check: (message) => config.owners.includes(message.author.id)
    }
  ]
}

module.exports = config
