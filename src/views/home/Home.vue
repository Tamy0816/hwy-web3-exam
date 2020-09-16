<template>
  <div id="home">
    <!-- <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>-->
    <!-- <hwy-header></hwy-header> -->
    <div style="position:relative;z-index:1;padding-top:50px">
      <slider></slider>
    </div>
    <div class="content">
      <div class="box-wrapper">
        <div class="intro-box">
          <!--classroom介绍区域-->
          <div class="box-info">{{boxText}}</div>
          <div class="box-btn">
            <button style="cursor: pointer;" @click="startClass" class="btn1">开始上课</button>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in cards" :key="index">
        <div class="box-text">
          <h2>{{item.header}}</h2>
          <p>{{item.des}}</p>
        </div>
        <cards :cards="item.data"></cards>
      </div>

      <div style="text-align:center;margin-top:50px">
        <h2>活动公告</h2>
        <list :list="activatylistData"></list>
      </div>
    </div>
    <hwy-footer></hwy-footer>
  </div>
</template>

<script>
import HwyHeader from "../../components/Header";
import Slider from "./childComps/slider";
import Cards from "./childComps/cards";
import List from "./childComps/list";
import HwyFooter from "../../components/footer/footer";

export default {
  name: "home",
  components: {
    HwyHeader,
    Slider,
    Cards,
    List,
    HwyFooter
  },
  data() {
    return {
      boxText:
        "Classroom是基于华为云的云上软件教学服务，支持高校师生实现备课、上课、作业、考试、实验、实训等全教学流程的线上教学，提供多类习题自动判题、企业级DevOps实训、免费在线习题库等众多高级特性辅助进行数字化教学转型。",
      banners: [
        {
          image:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.17.002/banner-2.64b1407e7a8db89d6cf2.jpg",
          link: "1"
        },
        {
          image:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.17.002/banner-6.80cafe61bcb20a98eb1e.jpg",
          link: "2"
        },
        {
          image:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.17.002/banner-5.0e9bb68d425a4a5c3b18.jpg",
          link: "3"
        },
        {
          image:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.17.002/banner-8.d14241daf518717981c6.jpg",
          link: "4"
        }
      ],
      cards: [
        {
          header: "云课堂",
          des: "免费精品公开课，覆盖丰富知识点、课件与在线习题",
          data: [
            {
              header: "区块链精品实践课",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                " 本课程由浅入深的介绍区块链技术缘起、原理机制、演进和发展现状，分享区块链典型应用场景及特点。了解华为云区块链的方案及特点，参与动手实验。从入门到实践，循序渐进一站式学习"
            },
            {
              header: "技术大咖在线论道-华为云技术开放视频合集课堂入口",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                "【技术大咖在线论道 百万+开发者精益成长】 汇聚多领域资深技术专家视频课程； 探讨国内外前沿技术领域发展趋势； 助力开发者专业技术能力精益成长； 分享可借鉴研发技术实践成功经验。"
            },
            {
              header: "HE2E DevOps实践",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                " HE2E即华为端到端的DevOps实施框架，集合了业界先进的实践，结合华为30年研发经验，形成的一套可操作可落地的敏捷开发方法论，并基于DevCloud工具链进行承载。"
            },
            {
              header: "C语言程序设计",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                " 本课程适合作为高等学校计算机专业及相关专业C语言程序设计课程的教材，也可作为计算机等级考试参考书，还可供从事计算机软件开发人员参考使用。主要包含，C语言概述，数据类型，基本语句与结构化程序设计，数组，函数和模块化程序设计，指针，预处理命令，复杂数据类型，文件。附有习题，习题覆盖知识重点，题型丰富。"
            }
          ]
        },
         {
          header: "教学市场",
          des: "丰富教学资源辅助高效教学，免费习题库一键获取",
          data: [
            {
              header: "区块链精品实践课",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                " 本课程由浅入深的介绍区块链技术缘起、原理机制、演进和发展现状，分享区块链典型应用场景及特点。了解华为云区块链的方案及特点，参与动手实验。从入门到实践，循序渐进一站式学习"
            },
            {
              header: "技术大咖在线论道-华为云技术开放视频合集课堂入口",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                "【技术大咖在线论道 百万+开发者精益成长】 汇聚多领域资深技术专家视频课程； 探讨国内外前沿技术领域发展趋势； 助力开发者专业技术能力精益成长； 分享可借鉴研发技术实践成功经验。"
            },
            {
              header: "HE2E DevOps实践",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                " HE2E即华为端到端的DevOps实施框架，集合了业界先进的实践，结合华为30年研发经验，形成的一套可操作可落地的敏捷开发方法论，并基于DevCloud工具链进行承载。"
            },
            {
              header: "C语言程序设计",
              img:
                "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",
              des:
                " 本课程适合作为高等学校计算机专业及相关专业C语言程序设计课程的教材，也可作为计算机等级考试参考书，还可供从事计算机软件开发人员参考使用。主要包含，C语言概述，数据类型，基本语句与结构化程序设计，数组，函数和模块化程序设计，指针，预处理命令，复杂数据类型，文件。附有习题，习题覆盖知识重点，题型丰富。"
            }
          ]
        }
      ],
      activatylistData: [
        {
          img: "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.12.003/notice.b7839ff8db59462824d7.png",
          title: "大连理工大学与华为软件工程大师华山论剑，邀您参与。"
        },
        {
          img: "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.12.003/notice.b7839ff8db59462824d7.png",
          title: "大连理工、华为云、目睹有课三方携手直播JAVA线上教学。"
        },
        {
          img: "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.12.003/notice.b7839ff8db59462824d7.png",
          title: "【Part1】玩转华为云Classroom，在线教学so easy！"
        },
        {
          img: "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.12.003/notice.b7839ff8db59462824d7.png",
          title: "【Part2】玩转华为云Classroom，在线教学so easy！"
        }
      ]
    };
  },
  methods: {
    startClass(){
      alert('开始上课...')
    }
  }
};
</script>

<style>
#home {
}
.box-btn {
  display: inline-block;
  width: 10%;
  margin-left: 15px;
}
.box-btn button {
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 30px;
  background-color: #5e7ce0;
  outline: none;
  color: white;
  float: right;
}
.intro-box {
  display: flex;
  flex-wrap: nowrap;
  padding: 30px;
  position: relative;
  top: -25px;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(41, 48, 64, 0.1);
  border-radius: 5px;
  align-items: center;
}
.box-info {
  flex: 2;
  padding-right: 40px;
  font-size: 16px;
  color: #5e6678;
  line-height: 32px;
  text-align: left;
}
.box-text {
  text-align: center;
}
.content {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
}
</style>
