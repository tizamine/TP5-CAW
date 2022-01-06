import React from 'react';
import De from './De';

class LancerDe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Win: null,
            message : '',
            message2 : '',
            PremierDe: 4,
            DeuxiemeDe: 3,
            score: 0,
            count:0

        }
    }
    Lancer = () => {
        if (this.state.count <=10){
            if(this.state.count===10)
            {
                this.setState({  
                    message2:'Reset The Game',
                 
                })
            }else
            {

            let PremierDeRandom = Math.floor(Math.random() * 6) + 1
            let DeuxiemeDeRandom = Math.floor(Math.random() * 6) + 1
   
            this.setState({count:this.state.count+1})
            this.setState({PremierDe: PremierDeRandom})
            this.setState({DeuxiemeDe: DeuxiemeDeRandom}) 
           
            
            this.Win = PremierDeRandom === DeuxiemeDeRandom
            this.Win ? 
            
            this.setState({  
                message:'You win !!',
                score:this.state.score+1
            })
            : this.setState({ 
                 message:'Try again',
                 score:this.state.score-1
                })
                
            }}
      
    }
    render () {
        return (
            <div>
                <De alt="De1" number={this.state.PremierDe} />
                
                <De alt="De2"number={this.state.DeuxiemeDe}/>
                <h1>{ this.state.message}  </h1>
                <h1>{ this.state.message2}  </h1>
                <h1>Score = {this.state.score} </h1>
                <h1>Counter = {this.state.count} </h1>

               
                <button onClick={this.Lancer}>lancer les Dés</button>
                <br></br>
                <button onClick={()=>{this.setState({count:0,score:0,message2:''})}}>Reset</button>
            </div>
        );
    }
}
export default LancerDe;