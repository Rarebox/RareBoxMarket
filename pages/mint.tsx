import { NextPage } from 'next'
import { Text, Flex, Box } from 'components/primitives'
import Layout from 'components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

const Mint: NextPage = () => {
    return (
        <Layout>
            <Flex
                direction="column"
                align="center"
                css={{ py: '200px', px: '$3', textAlign: 'center' }}
            >
                <Text style="h2" as="h1">
                    Rarebox Membership Pass
                    <br />
                    <Text style="body1" css={{ mb: 48 }}>
                        Ethereum
                    </Text>
                </Text>
                <iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x8FebD4952B05a1fCc09f2c9db8A9112Bc3cA0a86&chain=%7B%22name%22%3A%22Avalanche+C-Chain%22%2C%22chain%22%3A%22AVAX%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Favalanche.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Avalanche%22%2C%22symbol%22%3A%22AVAX%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22avax%22%2C%22chainId%22%3A43114%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22avalanche%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Favalanche%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=78ee6090931e055c13ca4d802c572cca&theme=light&primaryColor=purple"
    width="600px"
    height="600px"
></iframe>
                <br />
                <Text style="body1" css={{ mb: 48 }}>
                    Polygon
                </Text>
                <iframe
                    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc1155.html?contract=0x76DCE039661036f47A8806688d4BF7bA2db34420&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D&tokenId=3&theme=dark&primaryColor=purple"
                    width="600px"
                    height="600px"
                ></iframe>
                <br />
                <Text style="body1" css={{ mb: 48 }}>
                    Phoenix
                </Text>
                <iframe
                    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc1155.html?contract=0x7Bb78c39514d8d8720e380493ac367DD4D5b03A0&chain=%7B%22name%22%3A%22Phoenix+Mainnet%22%2C%22chain%22%3A%22Phoenix%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fphoenix.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Phoenix%22%2C%22symbol%22%3A%22PHX%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22Phoenix%22%2C%22chainId%22%3A13381%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22phoenix%22%7D&tokenId=3&theme=dark&primaryColor=orange"
                    width="600px"
                    height="600px"
                ></iframe>
                <br />
                <Text style="body1" css={{ mb: 48 }}>
                    Binance Smart Chain
                </Text>
                <iframe
                    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc1155.html?contract=0x83fc7f12b5CEafEd4c435A26ec1758EdA4A4d267&chain=%7B%22name%22%3A%22Binance+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Binance+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%7D&tokenId=3&theme=dark&primaryColor=yellow"
                    width="600px"
                    height="600px"
                ></iframe>
            </Flex>
        </Layout>
    )
}

export default Mint
