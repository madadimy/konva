function PlusOne(config){
    /*

    To use:

    var myTicker = new PlusOne({
        min: 30,
        max: 900,
        increment: 30,
        currentValue: 90
    });

    returns the incremented value
    you can also access the value via:
    myIncrementer.currentValue();

     */

    // setup defaults
    props = config || {
        min: 0,
        max: 10,
        increment: 1,
        currentValue: 0
    };

    // private method for bumping this up by one increment
    function addOne(){
        if( (props.currentValue + props.increment) > props.max ){
            // if adding one unit to this value exceeds the max, handle this here
            return props.currentValue;
        } else {
            // if it doesn't, continue incrementing
            return props.currentValue = props.currentValue + props.increment;
        }
    }

    // private method for bumping this down by one increment
    function subtractOne(){
        if( (props.currentValue - props.increment) < props.min ){
            // limit
            return props.currentValue;
        }else{
            // decrement
            return props.currentValue = props.currentValue - props.increment;
        }
    }

    function isMin(){
        return props.currentValue == props.min;
    }

    function isMax(){
        return props.currentValue == props.max;
    }

    // getter & setter current value
    // this takes an optional val param, and will update the currentValue to that param
    // NOTE: this is
    function getCurrentValue(val){
        typeof val == 'number' ? props.currentValue = val : props.currentValue = props.currentValue;
        return props.currentValue;
    }

    function reset(){
        return getCurrentValue(0);
    }

    return {
        reset : reset,
        currentValue : getCurrentValue,

        bumpUp : function(){
           return( addOne() );
        },

        bumpDown : function(){
            return( subtractOne() );
        },

        isMin : function(){
            return( isMin() );
        },

        isMax : function(){
            return( isMax() );
        }
    }
};
