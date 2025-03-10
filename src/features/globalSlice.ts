import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {api, openai} from "../utilities/api";

type PossibleConditions = {
  condition: string,
  description: string,
  commonSymptoms: string[],
  riskLevel: string,
  additionalInfo: string,
}

type UserProps = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export type Props = {
  loading: boolean,
  user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  } | null,
  profile: {
    age: number;
    sex: string,
    height: number;
    weight: number;
    waist: number;
    hip: number;
    bmi: number;
    medicalHistory: string[],
    currentMedications: string[],
    allergies: string[],
    symptoms: string[],
    lifestyle: {
      smoking: "Never" | "Sometimes" | "Often",
      alcohol: "Never" | "Sometimes" | "Often",
      exercise: "Low" | "Moderate" | "High",
      diet: "Poor" | "Mixed" | "Balanced",
      stressLevel: "Low" | "Moderate" | "High",
    },
    familyHistory: {
      "diabetes": boolean,
      "heartDisease": boolean,
      "cancer": boolean
    },
    vitals: {
      bloodPressure: {
        systolic: number,
        diastolic: number
      },
      restingHeartRate: number,
      bloodSugar: number,
    },
    goals: {
      weightManagement: boolean,
      stressReduction: boolean,
      improveBloodPressure: boolean,
      preventDiabetes: boolean,
      increaseFitness: boolean,
    }
  },
  results: {
    healthTip: string,
    conditionInfo: {
      name: string,
      overview: string,
      commonMisconceptions: string[],
      latestResearch: string[],
      lifestyleConsiderations: string[],
    },
    drugInfo: {
      name: string,
      description: string,
      uses: string[],
      precautions: string,
      sideEffects: string[],
    },
    symptomAssessment: {
      possibleConditions: PossibleConditions[],
      recommendedActions: string[],
      lifestyleConsiderations: string[],
      whenToSeekMedicalAttention: string[],
      preventiveMeasures: string[],
    },
    healthAssessment: {
      overview: string,
      keyAreas: string[],
      riskFactors: string[],
      recommendations: {
        diet: string[],
        exercise: string[],
        sleep: string[],
        stressManagement: string[],
        screenings: string[],
        vaccinations: string[],
        regularCheckups: string[],
        healthyLivingTips: string[],
        communityResources: string[],
        shortTermGoals: string[],
        longTermGoals: string[],
        monitoringMetrics: string[],
      }
    },
    bmi: {
      bmi: number,
      status: string,
      risk: string,
      prime: number,
      ponderalIndex: number,
      bmr: number,
      waistHipRatio: number,
      waistHipStatus: string,
      waistHeightRatio: number,
      waistHeightStatus: string,
    }
  }
};

const initialState: Props = {
  loading: false,
  user: null,
  profile: {
    age: 18,
    sex: "male",
    height: 60,
    weight: 150,
    waist: 38,
    hip: 38,
    bmi: 18,
    medicalHistory: [],
    currentMedications: [],
    allergies: [],
    symptoms: [],
    lifestyle: {
      smoking: "Never",
      alcohol: "Never",
      exercise: "Moderate",
      diet: "Balanced",
      stressLevel:"Moderate",
    },
    familyHistory: {
      "diabetes": true,
      "heartDisease": true,
      "cancer": false
    },
    vitals: {
      bloodPressure: {
        systolic: 120,
        diastolic: 80
      },
      restingHeartRate: 80,
      bloodSugar: 90,
    },
    goals: {
      weightManagement: true,
      stressReduction: true,
      improveBloodPressure: true,
      preventDiabetes: true,
      increaseFitness: true,
    }
  },
  results: {
    healthTip: "",
    conditionInfo: {
      name: "",
      overview: "",
      commonMisconceptions: [],
      latestResearch: [],
      lifestyleConsiderations: [],
    },
    drugInfo: {
      name: "",
      description: "",
      uses: [],
      precautions: "",
      sideEffects: [],
    },
    symptomAssessment: {
      possibleConditions: [],
      recommendedActions: [],
      lifestyleConsiderations: [],
      whenToSeekMedicalAttention: [],
      preventiveMeasures: [],
    },
    healthAssessment: {
      overview: "",
      keyAreas: [],
      riskFactors: [],
      recommendations: {
        diet: [],
        exercise: [],
        sleep: [],
        stressManagement: [],
        screenings: [],
        vaccinations: [],
        regularCheckups: [],
        healthyLivingTips: [],
        communityResources: [],
        shortTermGoals: [],
        longTermGoals: [],
        monitoringMetrics: [],
      }
    },
    bmi: {
      bmi: 0,
      status: "",
      risk: "",
      prime: 0,
      ponderalIndex: 0,
      bmr: 0,
      waistHipRatio: 0,
      waistHipStatus: "",
      waistHeightRatio: 0,
      waistHeightStatus: "",
    }
  }
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addSymptoms: (state, action: PayloadAction<string>) => {
      if (state.profile.symptoms.includes(action.payload)) return
      state.profile.symptoms.push(action.payload)
    },
    removeSymptoms: (state, action: PayloadAction<string>) => {
      state.profile.symptoms = state.profile.symptoms.filter(item => item !== action.payload)
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.profile.age = action.payload
    },
    setSex: (state, action: PayloadAction<string>) => {
      state.profile.sex = action.payload
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.profile.height = action.payload
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.profile.weight = action.payload
    },
    setWaist: (state, action: PayloadAction<number>) => {
      state.profile.waist = action.payload
    },
    setHip: (state, action: PayloadAction<number>) => {
      state.profile.hip = action.payload
    },
    setBmi: (state, action: PayloadAction<number>) => {
      state.profile.bmi = action.payload
    },
    addMedicalHistory: (state, action: PayloadAction<string>) => {
      if (state.profile.medicalHistory.includes(action.payload)) return
      state.profile.medicalHistory.push(action.payload)
    },
    removeMedicalHistory: (state, action: PayloadAction<string>) => {
      state.profile.medicalHistory = state.profile.medicalHistory.filter(item => item !== action.payload)
    },
    addCurrentMedications: (state, action: PayloadAction<string>) => {
      if (state.profile.currentMedications.includes(action.payload)) return
      state.profile.currentMedications.push(action.payload)
    },
    removeCurrentMedications: (state, action: PayloadAction<string>) => {
      state.profile.currentMedications = state.profile.currentMedications.filter(item => item !== action.payload)
    },
    addAllergies: (state, action: PayloadAction<string>) => {
      if (state.profile.allergies.includes(action.payload)) return
      state.profile.allergies.push(action.payload)
    },
    removeAllergies: (state, action: PayloadAction<string>) => {
      state.profile.allergies = state.profile.allergies.filter(item => item !== action.payload)
    },
   setSmoking: (state, action: PayloadAction<any>) => {
      state.profile.lifestyle.smoking = action.payload
    },
    setAlcohol: (state, action: PayloadAction<any>) => {
      state.profile.lifestyle.alcohol = action.payload
    },
    setExercise: (state, action: PayloadAction<any>) => {
      state.profile.lifestyle.exercise = action.payload
    },
    setDiet: (state, action: PayloadAction<any>) => {
      state.profile.lifestyle.diet = action.payload
    },
    setStressLevel: (state, action: PayloadAction<any>) => {
      state.profile.lifestyle.stressLevel = action.payload
    },
    setDiabetes: (state, action: PayloadAction<boolean>) => {
      state.profile.familyHistory.diabetes = action.payload
    },
    setHeartDisease: (state, action: PayloadAction<boolean>) => {
      state.profile.familyHistory.heartDisease = action.payload
    },
    setCancer: (state, action: PayloadAction<boolean>) => {
      state.profile.familyHistory.cancer = action.payload
    },
    setSystolicBloodPressure: (state, action: PayloadAction<number>) => {
      state.profile.vitals.bloodPressure.systolic = action.payload
    },
    setDiastolicBloodPressure: (state, action: PayloadAction<number>) => {
      state.profile.vitals.bloodPressure.diastolic = action.payload
    },
    setRestingHeartRate: (state, action: PayloadAction<number>) => {
      state.profile.vitals.restingHeartRate = action.payload
    },
    setBloodSugar: (state, action: PayloadAction<number>) => {
      state.profile.vitals.bloodSugar = action.payload
    },
    toggleWeightManagement: (state, action: PayloadAction<boolean>) => {
      state.profile.goals.weightManagement = action.payload
    },
    toggleStressReduction: (state, action: PayloadAction<boolean>) => {
      state.profile.goals.stressReduction = action.payload
    },
    toggleImproveBloodPressure: (state, action: PayloadAction<boolean>) => {
      state.profile.goals.improveBloodPressure = action.payload
    },
    togglePreventDiabetes: (state, action: PayloadAction<boolean>) => {
      state.profile.goals.preventDiabetes = action.payload
    },
    toggleIncreaseFitness: (state, action: PayloadAction<boolean>) => {
      state.profile.goals.increaseFitness = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(register.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(register.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(login.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null
      state.loading = false
    })
    builder.addCase(logout.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(logout.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchHealthTip.fulfilled, (state, action) => {
      state.results.healthTip = action.payload
      state.loading = false
    })
    builder.addCase(fetchHealthTip.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchHealthTip.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchConditionInfo.fulfilled, (state, action) => {
      state.results.conditionInfo.name = action.payload.conditionInfo.name
      state.results.conditionInfo.overview = action.payload.conditionInfo.overview
      state.results.conditionInfo.commonMisconceptions = action.payload.educationalContent.commonMisconceptions
      state.results.conditionInfo.latestResearch = action.payload.educationalContent.latestResearch
      state.results.conditionInfo.lifestyleConsiderations = action.payload.educationalContent.lifestyleConsiderations
      state.loading = false
    })
    builder.addCase(fetchConditionInfo.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchConditionInfo.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchDrugInfo.fulfilled, (state, action) => {
      state.results.drugInfo.name = action.payload.name
      state.results.drugInfo.description = action.payload.description
      state.results.drugInfo.uses = action.payload.uses
      state.results.drugInfo.precautions = action.payload.precautions
      state.results.drugInfo.sideEffects = action.payload.sideEffects
      state.loading = false
    })
    builder.addCase(fetchDrugInfo.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchDrugInfo.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchSymptomAssessment.fulfilled, (state, action) => {
      state.results.symptomAssessment.possibleConditions = action.payload.result.analysis.possibleConditions
      state.results.symptomAssessment.recommendedActions = action.payload.result.analysis.generalAdvice.recommendedActions
      state.results.symptomAssessment.lifestyleConsiderations = action.payload.result.analysis.generalAdvice.lifestyleConsiderations
      state.results.symptomAssessment.whenToSeekMedicalAttention = action.payload.result.analysis.generalAdvice.whenToSeekMedicalAttention
      state.results.symptomAssessment.preventiveMeasures = action.payload.result.educationalResources.preventiveMeasures
      state.loading = false
    })
    builder.addCase(fetchSymptomAssessment.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchSymptomAssessment.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchHealthRecommendations.fulfilled, (state, action) => {
      state.results.healthAssessment.overview = action.payload.result.healthAssessment.overview
      state.results.healthAssessment.keyAreas = action.payload.result.healthAssessment.keyAreas
      state.results.healthAssessment.riskFactors = action.payload.result.healthAssessment.riskFactors
      state.results.healthAssessment.recommendations.diet = action.payload.result.recommendations.lifestyle.diet
      state.results.healthAssessment.recommendations.exercise = action.payload.result.recommendations.lifestyle.exercise
      state.results.healthAssessment.recommendations.sleep = action.payload.result.recommendations.lifestyle.sleep
      state.results.healthAssessment.recommendations.stressManagement = action.payload.result.recommendations.lifestyle.stressManagement
      state.results.healthAssessment.recommendations.screenings = action.payload.result.recommendations.preventiveCare.screenings
      state.results.healthAssessment.recommendations.vaccinations = action.payload.result.recommendations.preventiveCare.vaccinations
      state.results.healthAssessment.recommendations.regularCheckups = action.payload.result.recommendations.preventiveCare.regularCheckups
      state.results.healthAssessment.recommendations.healthyLivingTips = action.payload.result.educationalResources.healthyLivingTips
      state.results.healthAssessment.recommendations.communityResources = action.payload.result.educationalResources.communityResources
      state.results.healthAssessment.recommendations.shortTermGoals = action.payload.result.progressTracking.shortTermGoals
      state.results.healthAssessment.recommendations.longTermGoals = action.payload.result.progressTracking.longTermGoals
      state.results.healthAssessment.recommendations.monitoringMetrics = action.payload.result.progressTracking.monitoringMetrics
      state.loading = false
    })
    builder.addCase(fetchHealthRecommendations.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchHealthRecommendations.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchBmiResults.fulfilled, (state, action) => {
      state.results.bmi.bmi = action.payload.bmi.value
      state.results.bmi.status = action.payload.bmi.status
      state.results.bmi.risk = action.payload.bmi.risk
      state.results.bmi.prime = action.payload.bmi.prime
      state.results.bmi.ponderalIndex = action.payload.ponderal_index
      state.results.bmi.bmr = action.payload.bmr.value
      state.results.bmi.waistHipRatio = action.payload.whr.value
      state.results.bmi.waistHipStatus = action.payload.whr.status
      state.results.bmi.waistHeightRatio = action.payload.whtr.value
      state.results.bmi.waistHeightStatus = action.payload.whtr.status
      state.profile.bmi = action.payload.bmi.value
      state.loading = false
    })
    builder.addCase(fetchBmiResults.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchBmiResults.pending, (state) => {
      state.loading = true
    })
  }
})

export const register = createAsyncThunk('global/register', async (payload: UserProps) => {
  console.log(payload)
  try {
    const response = await api.post("/auth/register", payload)
    const { user } = response.data
    return user
  } catch (error) {
    console.log(error);
  }
})

export const login = createAsyncThunk('global/login', async (payload: { email: string, password: string }) => {
  try {
    const response = await api.post("/auth/login", payload)
    const { user } = response.data
    return user
  } catch (error) {
    console.log(error);
  }
})

export const logout = createAsyncThunk('global/logout', async () => {
  try {
    await api("/auth/logout");
  } catch (error) {
    console.log(error);
  }
})

export const fetchHealthTip = createAsyncThunk('global/fetchHealthTip', async  () => {
  try {
    const response = await openai.post("", {
      model: "gpt-3.5-turbo-0125",
      max_tokens: 400,
      messages: [
        {
          role: "system",
          content: 'You are a helpful assistant designed to provide a random general tip about overall health in 2-3 sentences.'
        },
        {
          role: "user",
          content: `Please provide a general health tip for an adult. Keep the response between 2-3 sentences`
        }
      ]
    })
    return response.data.choices[0].message.content
  } catch (error) {
    console.log(error)
  }
})

export const fetchConditionInfo = createAsyncThunk('global/fetchConditionInfo', async (payload: string) => {
  console.log(payload)
  const data = {
    condition: payload,
    lang: 'en'
  }
  try {
    const response = await api.post("/research/conditions", data)
    const { result } = response.data
    return result
  } catch (error) {
    console.log(error)
  }
})

export const fetchDrugInfo = createAsyncThunk('global/fetchDrugInfo', async (payload: string) => {
  try {
    const response = await openai.post("", {
      model: "gpt-3.5-turbo-0125",
      response_format: { "type": "json_object" },
      max_tokens: 550,
      messages: [
        {
          role: "system",
          // {name, description, [uses], directions, precautions, [sideEffects]}
          content: 'You are a helpful assistant designed to provide information about a requested drug. Provide your response in JSON format like this:{"name":"acetaminophen","description":"Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, reactions to vaccinations (shots), and to reduce fever. Acetaminophen may also be used to relieve the pain of osteoarthritis (arthritis caused by the breakdown of the lining of the joints). Acetaminophen works by changing the way the body senses pain and by cooling the body.","uses":["headache", "backache", "minor pain of arthritis", "toothache", "muscular aches", "premenstrual and menstrual cramps", "fever"],"precautions":Before using this product, tell your doctor or pharmacist your medical history, especially of: liver disease, regular use/abuse of alcohol. Caution is advised if you have diabetes, phenylketonuria (PKU). Tell your doctor if you are pregnant before using this medication. Consult your doctor before breastfeeding." ,"sideEffects":["rash","hives","blistering skin","itching", "difficulty breathing"]}'
        },
        {
          role: "user",
          content: "Retrieve information for the drug lisinopril"
        },
        {
          role: "assistant",
          content: '{"name":"lisinopril", "description":"Lisinopril is used to treat high blood pressure Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. It is also used to treat heart failure and to improve survival after a heart attack. Lisinopril works by relaxing blood vessels so blood can flow more easily.","uses": ["diabetic nephropathy", "migraine prevention", "hypertension", "acute myocardial infarction", "chronic heart failure", "scleroderma renal crisis"], "precautions":"Before taking lisinopril, tell your doctor or pharmacist if you are allergic to ACE inhibitors (such as benazepril) or if you have any other allergies. Before using this medication, tell your doctor or pharmacist your medical history, especially of: history of an allergic reaction which included swelling of the face/lips/tongue/throat (angioedema), blood filtering procedures (such as LDL apheresis, dialysis), or high level of potassium in the blood.", "sideEffects": ["dizziness", "headache", "dry cough", "diarrhoea", "blurred vision", "mild itching or rash" ]}'
        },
        {
          role: "user",
          content: `Retrieve information for the drug ${payload}`
        }
      ]
    })
    return JSON.parse(response.data.choices[0].message.content)
  } catch (error) {
    console.log(error)
  }
})

export const fetchSymptomAssessment = createAsyncThunk('global/fetchSymptomAssessment', async (_payload, { getState }) => {
  const state: any = getState()
  const data = {
    symptoms: state.global.profile.symptoms,
    patientInfo: {
      age: state.global.profile.age,
      gender: state.global.profile.sex,
      height: state.global.profile.height,
      weight: state.global.profile.weight,
      medicalHistory: state.global.profile.medicalHistory,
      currentMedications: state.global.profile.currentMedications,
      allergies: state.global.profile.allergies,
      lifestyle: state.global.profile.lifestyle,
    },
    lang: 'en'
  }
  try {
    const response = await api.post("ai/symptoms", data);
    return response.data
  } catch (error) {
    console.error(error);
  }
})

export const fetchHealthRecommendations = createAsyncThunk('global/fetchHealthRecommendations', async (_payload, { getState }) => {
  const state: any = getState()
  const data = {
    healthProfile: {
      age: state.global.profile.age,
      gender: state.global.profile.sex,
      weight: state.global.profile.weight,
      height: state.global.profile.height,
      bmi: state.global.profile.bmi,
      medicalConditions: state.global.profile.medicalConditions,
      lifestyle: state.global.profile.lifestyle,
      familyHistory: state.global.profile.familyHistory,
      vitals: state.global.profile.vitals
    },
    goals: state.global.profile.goals,
    lang: 'en'
  }
  try {
    const response = await api.post("ai/assessment", data);
    return response.data
  } catch (error) {
    console.error(error);
  }
})

export const fetchBmiResults = createAsyncThunk('global/fetchBmiResults', async (_payload, { getState }) => {
  const state: any = getState()
  console.log("fetching bmi results...")
  const data = {
    weight: { value: state.global.profile.weight.toString(), unit: 'lb' },
    height: { value: state.global.profile.height.toString(), unit: 'in' },
    sex: state.global.profile.sex.charAt(0),
    age: state.global.profile.age.toString(),
    waist: state.global.profile.waist.toString(),
    hip: state.global.profile.hip.toString()
  }
  try {
    const response = await api.post("/ai/bmi", data);
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error);
  }
})

export default globalSlice.reducer;
export const {
  addSymptoms,
  removeSymptoms,
  setAge,
  setSex,
  setHeight,
  setWeight,
  setWaist,
  setHip,
  setBmi,
  addMedicalHistory,
  removeMedicalHistory,
  addCurrentMedications,
  removeCurrentMedications,
  addAllergies,
  removeAllergies,
  setSmoking,
  setAlcohol,
  setExercise,
  setDiet,
  setStressLevel,
  setDiabetes,
  setHeartDisease,
  setCancer,
  setSystolicBloodPressure,
  setDiastolicBloodPressure,
  setRestingHeartRate,
  setBloodSugar,
  toggleWeightManagement,
  toggleStressReduction,
  toggleImproveBloodPressure,
  togglePreventDiabetes,
  toggleIncreaseFitness
} = globalSlice.actions;