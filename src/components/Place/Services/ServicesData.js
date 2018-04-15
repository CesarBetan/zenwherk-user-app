export const services = [
  {
    id: 'Outlets',
    available: true,
    info: {
      numberOfOutlets: 4,
    }
  },
  {
    id: 'Internet',
    available: true,
    info: {
      hasFreeWiFi: true,
      hasEthernet: false,
      internetSpeed: 100,
    }
  },
  {
    id: 'Parking',
    available: true,
    info: {
      freeParkingOnPremises: true,
      streetParking: false,
      bikeParking: true,
      paidParkingOnPremises: false,
    }
  },
  {
    id: 'Tables',
    available: true,
    info: {
      numberOfTables: 20,
    }
  },
  {
    id: 'Payment',
    available: true,
    info: {
      acceptsCreditCards: true,
      acceptedIssuers: [
        'Amex',
        'Visa',
        'Mastercard',
      ],
    }
  },
  {
    id: 'Noise',
    available: true,
    info: {
      noiseLevel: 'High',
    }
  },
]
