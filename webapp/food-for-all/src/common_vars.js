export const admin_initialRows = [
    {
      id: '0',
      state: 'Delhi',
      city: 'Delhi',
      location: 'Mubarak Nagar',
      quantity: 3000,
      type: 'Food Parcel',
      due_time: '10th June',
      status: 'Fulfilled',
      accepted:'false'
    },
    {
      id: '1',
      state: 'Delhi',
      city: 'Delhi ',
      location: 'Vasant Vihar',
      quantity: 443,
      type: 'Survival Kits',
      due_time: '9th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '2',
      state: 'Delhi',
      city: 'Delhi',
      location: 'Chandni Chowk',
      quantity: 80,
      type: 'Sanitizer',
      due_time: '10th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '3',
      state: 'West Bengal',
      city: 'Kolkata',
      location: 'Madhyamgram',
      quantity: 80,
      type: 'Survival Kits',
      due_time: '10th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '4',
      state: 'West Bengal',
      city: 'Siliguri',
      location: 'Nayapara',
      quantity: 2000,
      type: 'Masks',
      due_time: '9th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '5',
      state: 'Kerala',
      city: 'Kasargod',
      location: 'Pallathur',
      quantity: 520,
      type: 'Food Parcel',
      due_time: '12th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '6',
      state: 'Karnataka',
      city: 'Bengaluru',
      location: 'HSR Layout Sector 7',
      quantity: 250,
      type: 'Food Parcel',
      due_time: '8th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '7',
      state: 'Karnataka',
      city: 'Bengaluru',
      location: 'HSR Layout Sector 1',
      quantity: 55,
      type: 'Survival Kit',
      due_time: '9th June',
      status: 'Fulfilled',
      accepted:'false'
    },
    {
      id: '8',
      state: 'Karnataka',
      city: 'Bengaluru',
      location: 'ShantiNagar',
      quantity: 475,
      type: 'Masks',
      due_time: '10th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '9',
      state: 'Karnataka',
      city: 'Bengaluru',
      location: 'Yeshwantpur',
      quantity: 200,
      type: 'Water Bottles',
      due_time: '7th June',
      status: 'Required',
      accepted:'true'
    },
    {
      id: '10',
      state: 'Karnataka',
      city: 'Bengaluru',
      location: 'Mahalaxmi Layout',
      quantity: 350,
      type: 'Masks',
      due_time: '9th June',
      status: 'Required',
      accepted:'true'
    },
    {
        id: '11',
        state: 'Karnataka',
        city: 'Bengaluru',
        location: 'Yelahanka',
        quantity: 100,
        type: 'Food Parcel',
        due_time: '12th June',
        status: 'Required',
        accepted:'true'
      }
  
  ];


  export const admin_headers = [
    {
      key: 'state',
      header: 'State',
    },
    {
      key: 'city',
      header: 'City',
    },
    {
      key: 'location',
      header: 'Location',
    },
    {
      key: 'quantity',
      header: 'Quantity',
    },
    {
      key: 'type',
      header: 'Type',
    },
    {
      key: 'due_time',
      header: 'Due Time',
    },
    {
      key: 'action',
      header: 'Action',
    }
  
  ];

  export const ngo_initialRows = [
    {
      id: '0',
      city: 'Delhi',
      location: 'Mubarak Nagar',
      quantity: 3000,
      type: 'Food Parcel',
      due_time: '10th June',
      status: 'Disabled',
      accepted:'false'
    },
    {
      id: '1',
      city: 'Delhi ',
      location: 'Vasant Vihar',
      quantity: 443,
      type: 'Survival Kits',
      due_time: '9th June',
      status: 'Starting',
      accepted:'true'
    },
    {
      id: '2',
      city: 'Delhi',
      location: 'Chandni Chowk',
      quantity: 80,
      type: 'Sanitizer',
      due_time: '10th June',
      status: 'Active',
      accepted:'true'
    },
  ];
  
  
  export const ngo_headers = [
    {
      key: 'city',
      header: 'City',
    },
    {
      key: 'location',
      header: 'Location',
    },
    {
      key: 'quantity',
      header: 'Quantity',
    },
    {
      key: 'type',
      header: 'Type',
    },
    {
      key: 'due_time',
      header: 'Due Time',
    },
    {
      key: 'status',
      header: 'Status',
    }
  ];

  export const delhi_ngo= "SEEDS-Delhi"

  export const graph_url= "https://dataplatform.cloud.ibm.com/dashboards/c8a72da1-573e-4c5e-9157-4ab04926faf4/view/5f68f80d2cab17f045e9d4e4079079027935705db2bb8b5587d77b490a617097f03f47c4c87a4b58d9140466f7e443089c"
  export default {admin_headers, admin_initialRows, ngo_initialRows, ngo_headers, graph_url, delhi_ngo}
  