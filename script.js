// Expanded Medicine Data with Foods to Avoid
const medicines = {
    fever: { 
      name: "Paracetamol", 
      dosage: "500mg, twice a day", 
      foodsToAvoid: "Avoid alcohol and excessive caffeine."
    },
    cold: { 
      name: "Cetirizine", 
      dosage: "10mg, once a day", 
      foodsToAvoid: "Avoid dairy, as it can increase mucus production."
    },
    cough: { 
      name: "Benadryl Syrup", 
      dosage: "2 teaspoons, thrice a day", 
      foodsToAvoid: "Avoid cold drinks and spicy foods."
    },
    headache: { 
      name: "Ibuprofen", 
      dosage: "200mg, as needed (max 3/day)", 
      foodsToAvoid: "Avoid processed foods and excessive caffeine."
    },
    bodyPain: { 
      name: "Combiflam", 
      dosage: "1 tablet, twice a day", 
      foodsToAvoid: "Avoid fried foods and foods high in salt."
    },
    acidity: { 
      name: "Pantoprazole", 
      dosage: "40mg, before breakfast", 
      foodsToAvoid: "Avoid spicy, fatty, and citrus foods."
    },
    diarrhea: { 
      name: "ORS (Oral Rehydration Solution), Loperamide", 
      dosage: "ORS as needed, 2mg Loperamide after each loose stool", 
      foodsToAvoid: "Avoid high-fiber foods like beans and raw vegetables."
    },
    constipation: { 
      name: "Isabgol (Psyllium Husk)", 
      dosage: "1 tablespoon, with warm water", 
      foodsToAvoid: "Avoid processed foods and low-fiber foods."
    },
    allergy: { 
      name: "Levocetirizine", 
      dosage: "5mg, once a day", 
      foodsToAvoid: "Avoid foods that trigger allergic reactions such as peanuts, shellfish."
    },
    soreThroat: { 
      name: "Strepsils Lozenges", 
      dosage: "1 lozenge every 2-3 hours", 
      foodsToAvoid: "Avoid acidic foods and cold drinks."
    },
    indigestion: { 
      name: "Digene Gel", 
      dosage: "2 teaspoons, after meals", 
      foodsToAvoid: "Avoid heavy meals and greasy foods."
    },
    nausea: { 
      name: "Ondansetron", 
      dosage: "4mg, as prescribed", 
      foodsToAvoid: "Avoid greasy, spicy, and fatty foods."
    },
    migraine: { 
      name: "Sumatriptan", 
      dosage: "As prescribed by a doctor", 
      foodsToAvoid: "Avoid processed meats, cheese, and alcohol."
    },
    musclePain: { 
      name: "Volini Spray", 
      dosage: "Apply to affected area", 
      foodsToAvoid: "No specific food restrictions."
    },
    skinRash: { 
      name: "Calamine Lotion", 
      dosage: "Apply to the rash area", 
      foodsToAvoid: "Avoid acidic foods that may irritate the skin."
    },
    eyeIrritation: { 
      name: "Refresh Tears", 
      dosage: "1-2 drops in each eye", 
      foodsToAvoid: "No specific food restrictions."
    },
    earPain: { 
      name: "Ciplox Ear Drops", 
      dosage: "2-3 drops, twice a day", 
      foodsToAvoid: "Avoid foods that could cause ear infections like cold drinks and sugary foods."
    },
    commonColdSevere: { 
      name: "Dolo 650", 
      dosage: "650mg, thrice a day", 
      foodsToAvoid: "Avoid cold, sugary, and fatty foods."
    },
  
    // Additional Health Issues
    influenza: { 
      name: "Oseltamivir", 
      dosage: "75mg, twice a day for 5 days", 
      foodsToAvoid: "Avoid alcohol and sugary foods."
    },
    pneumonia: { 
      name: "Azithromycin", 
      dosage: "500mg once a day for 3 days", 
      foodsToAvoid: "Avoid spicy and acidic foods."
    },
    diabetes: { 
      name: "Metformin", 
      dosage: "500mg, once or twice a day", 
      foodsToAvoid: "Avoid sugary foods and refined carbs."
    },
    hypertension: { 
      name: "Amlodipine", 
      dosage: "5-10mg, once a day", 
      foodsToAvoid: "Avoid salty foods and alcohol."
    },
    asthma: { 
      name: "Salbutamol", 
      dosage: "Inhaler as needed", 
      foodsToAvoid: "Avoid dairy and cold foods."
    },
  };
  
  // Function to handle input and display the results
  function findMedicine() {
      const problem = document.getElementById('problem').value.toLowerCase();
      const result = document.getElementById('result');
      const foodsToAvoid = document.getElementById('foods-to-avoid');
      
      // Check if the problem exists in the data
      if (medicines[problem]) {
          const medicine = medicines[problem];
          result.innerHTML = `<strong>Medicine:</strong> ${medicine.name}<br><strong>Dosage:</strong> ${medicine.dosage}`;
          
          // Display Foods to Avoid
          foodsToAvoid.innerHTML = `<strong>Foods to Avoid:</strong> ${medicine.foodsToAvoid}`;
          
          // Show the result sections with smooth transition
          document.getElementById('medicine-details').classList.add('show');
          document.getElementById('foods-to-avoid-section').classList.add('show');
      } else {
          result.innerHTML = "Sorry, no information found for this health issue.";
          foodsToAvoid.innerHTML = "";
          
          // Hide the result sections if no result is found
          document.getElementById('medicine-details').classList.remove('show');
          document.getElementById('foods-to-avoid-section').classList.remove('show');
      }
  }
  