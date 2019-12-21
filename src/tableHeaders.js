export default{

    quotingHeaders : [
        {
          text: 'Quote Code',
          align: 'left',
          sortable: false,
          value: 'quoteName',
        },
        { text: 'Client', value: 'client.lastName' },
        { text: 'N.I.T.', value: 'client.ci' },
        { text: 'Date', value: 'date' },
        
      ],
    
    productHeaders: [
        { text: 'Name', value: 'product' },
        { text: 'Price', value: 'price' },
        { text: 'Quantity', value: 'quantity' },
    ]

}
