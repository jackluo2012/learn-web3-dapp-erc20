import Head from 'next/head'
import type { NextPage } from 'next'
import { Card, Button, Space } from 'antd';
import { useState,useEffect } from 'react';
import {ethers} from "ethers"
import ReadERC20 from '../components/ReadERC20';
import TransferERC20 from '../components/TransferERC20';


declare let window:any

const Home: NextPage = () =>{
  const [balance,setBalance] = useState<string |undefined>()
  const [currentAccount,setCurrentAccount] = useState<string |undefined>()
  const [chainId,setChainId] = useState<number | undefined>()
  const [chainname, setChainName] = useState<string | undefined>()

  useEffect(()=>{
    //检查是否设置了区块连帐号
    if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return
    // 检查浏览器端是否安装了metamask
    // https://docs.metamask.io/guide/getting-started.html#basic-considerations
    if(!window.ethereum) return 
    // 连接 metamask 
    //https://docs.ethers.org/v5/getting-started/#getting-started--connecting
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    //查询 帐号余额
    provider.getBalance(currentAccount).then((result)=>{
      setBalance(ethers.utils.formatEther(result))
    })
    //https://docs.ethers.org/v5/api/providers/provider/#Provider--network-methods
    provider.getNetwork().then((result)=>{
      setChainId(result.chainId)
      setChainName(result.name)
    })
  },[currentAccount]) // 仅在 currentAccount 更改时更新 实现了性能的优化
  
  //连接metamask
  const onClickConnect = ()=>{
    if(!window.ethereum){
      console.log("请先安装MetaMask")
      return 
    }
    //https://docs.ethers.org/v5/getting-started/#getting-started--connecting
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    //连接matemask 并获取 帐号
    // MetaMask requires requesting permission to connect users accounts
    provider.send("eth_requestAccounts", []).then((accounts)=>{
      if(accounts.length>0) setCurrentAccount(accounts[0])
    }).catch((e)=>console.log(e));
  }
  //取消联接metamask
  const onClickDisconnect=()=>{
    console.log("onClickDisConnect")
    setBalance(undefined)
    setCurrentAccount(undefined)
  }
  

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>     
        <h1>Explore Web3</h1>
        {currentAccount
        ?<Button block onClick={onClickDisconnect} >
          Account:{currentAccount}
        </Button>
        :
          <Button block onClick={onClickConnect} >Connect MetaMask</Button>
        }
        {currentAccount
        ?<Card title="帐号信息" size="small">
          <p>当前帐号ETH: {balance}</p> 
          <p>Chain Info: ChainId {chainId} name:{chainname} </p>
        </Card>
        :<></>
        }
        <ReadERC20 addressContract='0x5FC8d32690cc91D4c39d9d3abcBD16989F875707' currentAccount={currentAccount}></ReadERC20>
        <TransferERC20 addressContract="0x5FC8d32690cc91D4c39d9d3abcBD16989F875707" currentAccount={currentAccount}></TransferERC20>
        <Card title="任务 1" size="small">
          <p>使用 hardhat 连接本地链</p>        
        </Card>
        <Card title="任务 2" size="small">
          <p>使用 Reat/NextJs/Ant 开发Dapp</p>
        </Card>
        <Card title="任务 3" size="small">
          <p>读 Web3-React V6 文档</p>        
        </Card>
  </Space>
    )
}


export default Home
