import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Label,
} from 'reactstrap';

const originalDatas = {
  "pot_before_turn": 12,
  "start_at": "2018-11-09T06:01:23.282000+00:00",
  "pot_before_river": 16,
  "community_cards": [
    "7s",
    "th",
    "4s",
    "kh",
    "5h"
  ],
  "pot_before_preflop": 3,
  "pot": 20,
  "default_actions": [
    {
      "player_id": "26a5cea1-02ba-43b0-b7a3-16432e6013d0",
      "nickname": "油条",
      "action": "small_blind",
      "stack": 839,
      "amount": 1,
      "created_at": "2018-11-09T06:01:23.282000"
    },
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "big_blind",
      "stack": 198,
      "amount": 2,
      "created_at": "2018-11-09T06:01:23.282000"
    }
  ],
  "preflop_actions": [
    {
      "player_id": "26a5cea1-02ba-43b0-b7a3-16432e6013d0",
      "nickname": "油条",
      "action": "raise",
      "stack": 836,
      "amount": 4,
      "created_at": "2018-11-09T06:01:39.466000"
    },
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "call",
      "stack": 196,
      "amount": 4,
      "created_at": "2018-11-09T06:01:41.480000"
    }
  ],
  "flop_actions": [
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "check",
      "stack": 196,
      "amount": 0,
      "created_at": "2018-11-09T06:01:44.465000"
    },
    {
      "player_id": "26a5cea1-02ba-43b0-b7a3-16432e6013d0",
      "nickname": "油条",
      "action": "raise",
      "stack": 834,
      "amount": 2,
      "created_at": "2018-11-09T06:01:53.410000"
    },
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "call",
      "stack": 194,
      "amount": 2,
      "created_at": "2018-11-09T06:01:54.602000"
    }
  ],
  "players_info": {
    "26a5cea1-02ba-43b0-b7a3-16432e6013d0": {
      "seat": 1,
      "position": "BTN",
      "nickname": "Darwin D",
      "is_folded": false,
      "hole_card": [
        "5s",
        "4d"
      ],
      "showdown_strength": "two_pairs",
      "settlement": 10
    },
    "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb": {
      "seat": 9,
      "position": "BB",
      "nickname": "G500",
      "is_folded": false,
      "hole_card": [
        "ad",
        "jh"
      ],
      "showdown_strength": "high_card",
      "settlement": -10
    }
  },
  "river_actions": [
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "check",
      "stack": 192,
      "amount": 0,
      "created_at": "2018-11-09T06:02:15.493000"
    },
    {
      "player_id": "26a5cea1-02ba-43b0-b7a3-16432e6013d0",
      "nickname": "油条",
      "action": "raise",
      "stack": 830,
      "amount": 2,
      "created_at": "2018-11-09T06:02:19.274000"
    },
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "call",
      "stack": 190,
      "amount": 2,
      "created_at": "2018-11-09T06:02:21.808000"
    }
  ],
  "end_at": "2018-11-09T06:02:21.807000+00:00",
  "turn_actions": [
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "check",
      "stack": 194,
      "amount": 0,
      "created_at": "2018-11-09T06:02:00.643000"
    },
    {
      "player_id": "26a5cea1-02ba-43b0-b7a3-16432e6013d0",
      "nickname": "油条",
      "action": "raise",
      "stack": 832,
      "amount": 2,
      "created_at": "2018-11-09T06:02:09.918000"
    },
    {
      "player_id": "8b49b5a3-2384-4cf8-b77a-2876ef51c8fb",
      "nickname": "油条",
      "action": "call",
      "stack": 192,
      "amount": 2,
      "created_at": "2018-11-09T06:02:11.619000"
    }
  ],
  "pot_before_flop": 8
};

const GameAction = {
  JoinGame: 'join_room',
  StartGame: 'start_game',
  DealCards: 'deal_cards',
  Flop: 'flop',
  Turn: 'turn',
  River: 'river',
  Switch: 'switch_player',
  // 下注
  Bet: 'bet',
  // 跟注
  Call: 'call',
  // 小盲注
  SB: 'small_blind',
  // 大盲注
  BB: 'big_blind',
  Raise: 'raise',
  AllIn: 'all_in',
  Fold: 'fold',
  UpdatePots: 'update_pots',
  Check: 'check',
  Showdown: 'showdown',
  EndGame: 'end_game',
  LeaveRoom: 'leave_room',
  Sit: 'sit',
  StandUp: 'stand_up',
  Ready: 'ready',
  ApplyBuyIn: 'apply_buy_in',
  AuditBuyIn: 'audit_buy_in',
};

const GameActionCn = {
  Bet: "下注",
  Call: "跟注",
  SB: "小盲注",
  BB: "大盲注",
  Raise: "加注",
  AllIn: "全押",
  Check: "看牌",
  Fold: "弃牌",
};

const CardType = {
  // 高牌
  HIGH_CARD: "high_card",
  // 对子
  PAIR: "pair",
  // 两对
  TWO_PAIRS: "two_pairs",
  // 三张
  THREE_OF_A_KIND: "three_of_a_kind",
  // 顺子
  STRAIGHT: "straight",
  // 同花
  FLUSH: "flush",
  // 葫芦(A,A,A,K,K)
  FULL_HOUSE: "full_house",
  // 四张
  FOUR_OF_A_KIND: "four_of_a_kind",
  // 同花顺
  STRAIGHT_FLUSH: "straight_flush",
  // 皇家同花顺
  ROYAL_FLUSH: "royal_flush",
}

const TurnInfo = {
  "pre_flop": {
    "nameCn": "翻牌前",
    "nameEn": "Pre-Flop",
    "cardDisplayAmount": 0,
  },
  "flop": {
    "nameCn": "翻牌圈",
    "nameEn": "Flop",
    "cardDisplayAmount": 3,
  },
  "turn": {
    "nameCn": "转牌圈",
    "nameEn": "Turn",
    "cardDisplayAmount": 4,
  },
  "river": {
    "nameCn": "河牌圈",
    "nameEn": "River",
    "cardDisplayAmount": 5,
  }
};

class Data {
  constructor(props) {
    this.startAt = props["start_at"];
    this.cards = props["community_cards"];
    this.potBeforePreFlop = props["pot_before_preflop"];
    this.potBeforeFlop = props["pot_before_flop"];
    this.potBeforeTurn = props["pot_before_turn"];
    this.potBeforeRiver = props["pot_before_river"];
    this.pot = props["pot"];
    this.defaultActions = props["default_actions"];
    this.preflopActions = props["preflop_actions"];
    this.flopActions = props["flop_actions"];
    this.turnActions = props["turn_actions"];
    this.riverActions = props["river_actions"];
    this.playerInfo = props["players_info"];
  }
}

class Item {
  constructor(props) {
    this.playerId = props["player_id"];
    this.action = this._getAction(props["action"]);
    this.amount = props["amount"] === 0 ? "" : props["amount"];
    this.stack = props["stack"];
  }

  _getDisplayAction = (actionSymbol, backgroundColor) => (
    <Label className="rounded"
           style={{textAlign: "center", width: 20, color: "#333636", backgroundColor: backgroundColor}}
    >
      {actionSymbol}
    </Label>
  );

  _getAction = (action) => {
    let disPlayAction;
    switch (action) {
      case GameAction.BB || GameActionCn.BB:
        disPlayAction = this._getDisplayAction("BB", "#abb2b2");
        break;
      case GameAction.SB || GameActionCn.SB:
        disPlayAction = this._getDisplayAction("SB", "#abb2b2");
        break;
      case GameAction.Check || GameActionCn.Check:
        disPlayAction = this._getDisplayAction("X", "#6bfffd");
        break;
      case GameAction.Raise || GameActionCn.Raise:
        disPlayAction = this._getDisplayAction("R", "#f44446");
        break;
      case GameAction.Call || GameActionCn.Call:
        disPlayAction = this._getDisplayAction("C", "#2ac635");
        break;
      case GameAction.AllIn || GameActionCn.AllIn:
        disPlayAction = this._getDisplayAction("A", "#fc5921");
        break;
      case GameAction.Bet || GameActionCn.Bet:
        disPlayAction = this._getDisplayAction("B", "#f44446");
        break;
      case GameAction.Fold || GameActionCn.Fold:
        disPlayAction = this._getDisplayAction("F", "#7c7e7e");
        break;
      default:
        console.log("action not definition！！！！");
        return;
    }

    return disPlayAction;
  }
}

class PlayerAction extends Component {
  render() {
    const dataElement = [];
    const playerInfo = this.props.playerInfo;
    for (let action of this.props.actions) {
      const data = new Item(action);
      const playerId = data.playerId;
      const nickName = playerInfo[playerId]["nickname"];
      const position = playerInfo[playerId]["position"];
      dataElement.push(
        <tr>
          <td>
            <Row style={{marginLeft: 1}}>
              <Label className="rounded"
                     style={{textAlign: "center", width: 40, color: "#999d9d", backgroundColor: "#454e4e"}}
              >
                {position}
              </Label>
              <div style={{marginLeft: 2}}>
                {nickName}
              </div>
            </Row>
          </td>
          <td>
            <Row style={{marginLeft: 1}}>
              {data.action}
              <div style={{marginLeft: 2}}>
                {data.amount}
              </div>
            </Row>
          </td>
          <td className="text-right">
            <div>
              {data.stack}
            </div>
          </td>
        </tr>
      )
    }

    return dataElement;
  }
}

class PokerTurn extends Component {

  _renderPoker = () => {
    let imgCards = [];
    const cards = this.props.cards;
    const amount = this.props.turnInfo.cardDisplayAmount;
    for (let index = 0; index < amount; index++) {
      const imgSource = require(`../../assets/img/poker/poker_${cards[index]}@2x.png`)
      imgCards.push(
        <div style={{marginRight: 1}}>
          <img height="40" src={imgSource}/>
        </div>
      )
    }

    return imgCards;
  };

  render() {
    return (
      <tr>
        <td>
          <strong>{this.props.turnInfo.nameCn}</strong>
          <br/>
          <small>{this.props.turnInfo.nameEn}</small>
        </td>
        <td><Row>{this._renderPoker()}</Row></td>
        <td className="text-right">
          {this.props.pot}
        </td>
      </tr>
    );
  }
}

class Default extends Component {
  render() {
    return (<PlayerAction actions={this.props.actions} playerInfo={this.props.playerInfo}/>);
  }
}

class Turn extends Component {
  render() {
    let elements = [];
    elements.push(<PokerTurn turnInfo={this.props.turnInfo} pot={this.props.pot} cards={this.props.cards}/>);
    elements.push(<PlayerAction actions={this.props.actions} playerInfo={this.props.playerInfo}/>);
    return elements;
  }
}

class Settlement extends Component {

  _renderTitle = () => (
    <tr>
      <td>
        <strong>结算</strong>
        <br/>
        <small>Settlement</small>
      </td>
      <td></td>
      <td></td>
    </tr>
  );

  _renderItems = () => {
    let items = [];
    const playersInfoObject = this.props.playerInfo;
    const players = Object.keys(playersInfoObject).map((playerId) => {
      return playersInfoObject[playerId];
    });

    for (let player of players) {
      const nickName = player["nickname"];
      const position = player["position"];
      const holeCards = player["hole_card"];
      const cardType = player["showdown_strength"];
      const settlement = player["settlement"];
      const item = (
        <tr style={{height: 20}}>
          <td>
            <div>
              <Row style={{marginLeft: 1}}>
                <Label className="rounded"
                       style={{textAlign: "center", width: 40, color: "#999d9d", backgroundColor: "#454e4e"}}
                >
                  {position}
                </Label>
                <div style={{marginLeft: 2}}>
                  {nickName}
                </div>
              </Row>
            </div>
            <div>
              <Row style={{marginLeft: 1}}>
                {this._renderPoker(holeCards)}
              </Row>
            </div>
          </td>
          <td></td>
          <td className="text-right">
            <div>
              {this._getCardType(cardType)}
            </div>
            <div>
              <Label style={{marginTop: 15, color: settlement > 0 ? "#2ac635" : "#fc5921"}}
              >
                {settlement}
              </Label>
            </div>
          </td>
        </tr>
      );
      items.push(item);
    }

    return items;
  };

  _renderPoker = (holeCards) => {
    let imgCards = [];
    for (let holeCard of holeCards) {
      const imgSource = require(`../../assets/img/poker/poker_${holeCard}@2x.png`)
      imgCards.push(
        <div style={{marginRight: 1}}>
          <img height="40" src={imgSource}/>
        </div>
      )
    }

    return imgCards;
  };

  _getCardType = (result) => {
    let type = "高牌";
    switch (result) {
      case CardType.ROYAL_FLUSH:
        type = "皇家同花顺";
        break;
      case CardType.STRAIGHT_FLUSH:
        type = "同花顺";
        break;
      case CardType.FOUR_OF_A_KIND:
        type = "四条";
        break;
      case CardType.FLUSH:
        type = "同花";
        break;
      case CardType.FULL_HOUSE:
        type = "葫芦";
        break;
      case CardType.STRAIGHT:
        type = "顺子";
        break;
      case CardType.THREE_OF_A_KIND:
        type = "三条";
        break;
      case CardType.TWO_PAIRS:
        type = "两对";
        break;
      case CardType.PAIR:
        type = "一对";
        break;
      case CardType.HIGH_CARD:
        type = "高牌";
        break;
    }
    return type;
  };


  render() {
    let elements = [];
    elements.push(this._renderTitle());
    elements.push(this._renderItems());
    return elements;

  }
}

class SymbolMemo extends Component {

  _renderTitle = () => (
    <tr>
      <td>
        <strong>符号备注</strong>
        <br/>
        <small>Symbol Memo</small>
      </td>
      <td></td>
      <td></td>
    </tr>
  );

  _getDisplayAction = (actionSymbol, backgroundColor) => (
    <Label className="rounded"
           style={{textAlign: "center", width: 20, color: "#333636", backgroundColor: backgroundColor}}
    >
      {actionSymbol}
    </Label>
  );

  _getAction = (action) => {
    let disPlayAction;
    switch (action) {
      case GameActionCn.BB:
        disPlayAction = this._getDisplayAction("BB", "#abb2b2");
        break;
      case GameActionCn.SB:
        disPlayAction = this._getDisplayAction("SB", "#abb2b2");
        break;
      case GameActionCn.Check:
        disPlayAction = this._getDisplayAction("X", "#6bfffd");
        break;
      case GameActionCn.Raise:
        disPlayAction = this._getDisplayAction("R", "#f44446");
        break;
      case GameActionCn.Call:
        disPlayAction = this._getDisplayAction("C", "#2ac635");
        break;
      case GameActionCn.AllIn:
        disPlayAction = this._getDisplayAction("A", "#fc5921");
        break;
      case GameActionCn.Bet:
        disPlayAction = this._getDisplayAction("B", "#f44446");
        break;
      case GameActionCn.Fold:
        disPlayAction = this._getDisplayAction("F", "#7c7e7e");
        break;
      default:
        console.log("action not definition！！！！");
        return;
    }

    return disPlayAction;
  }

  _renderItems = () => {
    let dataElement = [];
    const actions = ["大盲注", "小盲注", "全押", "下注", "看牌", "跟注", "弃牌", "加注"];
    for (let action of actions) {
      dataElement.push(
        <div>
          <Row style={{marginLeft: 1}}>
            {this._getAction(action)}
            <div style={{marginLeft: 2}}>
              : {action}
            </div>
          </Row>
        </div>
      )
    }

    return(
      <tr>
        <td>{dataElement}</td>
        <td></td>
        <td></td>
      </tr>
    )
  };

  render() {
    let elements = [];
    elements.push(this._renderTitle());
    elements.push(this._renderItems());
    return elements;
  }
}

class Dashboard extends Component {
  render() {

    const data = new Data(originalDatas);
    const startAt = new Date(data.startAt).toDateString();
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{backgroundColor: "#021513"}}>
                <Row style={{flexDirection: "space-between"}}>
                  <Col xs="6">
                    <div style={{color: "#6bfffd"}}>{startAt}</div>
                  </Col>
                  <Col xs="6">
                    <div style={{color: "#6bfffd"}}>底池: {data.pot}</div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="table-outline">
                  <thead className="thead-light">
                  <tr>
                    <th>玩家</th>
                    <th>行动</th>
                    <th className="text-right">后手</th>
                  </tr>
                  </thead>
                  <tbody>
                    <Default actions={data.defaultActions}
                             playerInfo={data.playerInfo}
                    />
                    <Turn turnInfo={TurnInfo["pre_flop"]}
                          pot={data.potBeforePreFlop}
                          cards={data.cards}
                          actions={data.preflopActions}
                          playerInfo={data.playerInfo}
                    />
                    <Turn turnInfo={TurnInfo["flop"]}
                          pot={data.potBeforeFlop}
                          cards={data.cards}
                          actions={data.flopActions}
                          playerInfo={data.playerInfo}
                    />
                    <Turn turnInfo={TurnInfo["turn"]}
                          pot={data.potBeforeTurn}
                          cards={data.cards}
                          actions={data.turnActions}
                          playerInfo={data.playerInfo}
                    />
                    <Turn turnInfo={TurnInfo["river"]}
                          pot={data.potBeforeRiver}
                          cards={data.cards}
                          actions={data.riverActions}
                          playerInfo={data.playerInfo}
                    />
                    <Settlement playerInfo={data.playerInfo}/>
                    <SymbolMemo/>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
