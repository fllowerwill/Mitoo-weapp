Component({
    externalClasses: ['mit-class'],
    options: {
        multipleSlots: true
    },
    relations: {
        '../Cell/index': {
            type: 'child',
            linked: function(target) {
                let nodes = this.getRelationNodes('../Cell/index');
                nodes.forEach(function(i){
                    i.setData({
                        lastItem: false
                    })
                });
                nodes[nodes.length - 1].setData({
                    lastItem : true
                })
            }
        },

    }
})