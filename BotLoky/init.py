import discord
import Config

intents = discord.Intents.default()
intents.message_content = True
config = Config();
client = discord.Client(intents=intents)

print config.token;

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run(config.token)