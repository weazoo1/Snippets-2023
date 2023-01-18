const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping2')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true});
		await wait(20);
		await interaction.editReply('Pong!');
	},
};