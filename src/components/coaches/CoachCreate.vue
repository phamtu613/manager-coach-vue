<template>
  <form @submit.prevent="registerCoach">
    <div :class="['form-control', { error: dataValidate.firstName.isError }]">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your first name.."
        v-model.trim="dataValidate.firstName.value"
        @blur="validateField('firstName')"
      />
      <p class="error-msg" v-if="dataValidate.firstName.isError">
        {{ dataValidate.firstName.errorMess }}
      </p>
    </div>

    <div :class="['form-control', { error: dataValidate.lastName.isError }]">
      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
        v-model.trim="dataValidate.lastName.value"
        @blur="validateField('lastName')"
      />
      <p class="error-msg" v-if="dataValidate.lastName.isError">
        {{ dataValidate.lastName.errorMess }}
      </p>
    </div>

    <div :class="['form-control', { error: dataValidate.description.isError }]">
      <label for="subject">Description</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Description..."
        style="height: 200px"
        v-model.trim="dataValidate.description.value"
        @blur="validateField('description')"
      ></textarea>
      <p class="error-msg" v-if="dataValidate.description.isError">
        {{ dataValidate.description.errorMess }}
      </p>
    </div>

    <div :class="['form-control', { error: dataValidate.hourlyRate.isError }]">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        name="rate"
        v-model.trim="dataValidate.hourlyRate.value"
        @blur="validateField('hourlyRate')"
      />
      <p class="error-msg" v-if="dataValidate.hourlyRate.isError">
        {{ dataValidate.hourlyRate.errorMess }}
      </p>
      <br />
    </div>

    <div :class="['form-control', { error: dataValidate.areas.isError }]">
      <label>Areas of Experience</label>
      <div class="wp-area">
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="dataValidate.areas.value"
          @blur="validateField('areas')"
        />
        <label for="frontend"> Frontend</label><br />

        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="dataValidate.areas.value"
          @blur="validateField('areas')"
        />
        <label for="backend"> Backend</label><br />

        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="dataValidate.areas.value"
          @blur="validateField('areas')"
        />
        <label for="career">Career</label><br /><br />
        <p class="error-msg" v-if="dataValidate.areas.isError">
          {{ dataValidate.areas.errorMess }}
        </p>
      </div>
    </div>

    <input type="submit" value="Register" />
  </form>
</template>
<script>
export default {
  name: "coach-create",
  data() {
    return {
      dataValidate: {
        firstName: {
          isError: false,
          errorMess: "",
          value: "",
        },
        lastName: {
          isError: false,
          errorMess: "",
          value: "",
        },
        description: {
          isError: false,
          errorMess: "",
          value: "",
        },
        hourlyRate: {
          isError: false,
          errorMess: "",
          value: null,
        },
        areas: {
          isError: false,
          errorMess: "",
          value: [],
        },
        formError: false,
      },
    };
  },
  methods: {
    validateField(filed) {
      switch (filed) {
        case "firstName":
          if (this.dataValidate.firstName.value == "") {
            this.dataValidate.firstName.isError = true;
            this.dataValidate.formError = true;
            this.dataValidate.firstName.errorMess = "First name is required";
          } else {
            this.dataValidate.firstName.isError = false;
            this.dataValidate.formError = false;
          }
          break;
        case "lastName":
          if (this.dataValidate.lastName.value == "") {
            this.dataValidate.lastName.isError = true;
            this.dataValidate.formError = true;
            this.dataValidate.lastName.errorMess = "Last name is required";
          } else {
            this.dataValidate.lastName.isError = false;
            this.dataValidate.formError = false;
          }
          break;

        case "description":
          if (this.dataValidate.description.value == "") {
            this.dataValidate.description.isError = true;
            this.dataValidate.formError = true;
            this.dataValidate.description.errorMess = "Description is required";
          } else {
            if (this.dataValidate.description.value.length >= 100) {
              this.dataValidate.description.isError = true;
              this.dataValidate.formError = true;
              this.dataValidate.description.errorMess =
                "Description max length 100 characters";
            } else {
              this.dataValidate.description.isError = false;
              this.dataValidate.formError = false;
            }
          }
          break;

        case "hourlyRate":
          if (this.dataValidate.hourlyRate.value <= 0) {
            this.dataValidate.hourlyRate.isError = true;
            this.dataValidate.formError = true;
            this.dataValidate.hourlyRate.errorMess =
              "Hourly rate is a number greater than 0";
          } else {
            this.dataValidate.hourlyRate.isError = false;
            this.dataValidate.formError = false;
          }
          break;

        case "areas":
          if (this.dataValidate.areas.value.length == 0) {
            this.dataValidate.areas.isError = true;
            this.dataValidate.formError = true;
            this.dataValidate.areas.errorMess = "Skill is required";
          } else {
            this.dataValidate.areas.isError = false;
            this.dataValidate.formError = false;
          }
          break;
      }
    },
    registerCoach() {
      Object.keys(this.dataValidate).forEach((e) => {
        this.validateField(e);
      });
      if (this.dataValidate.formError) return;

      const formData = {
        areas: this.dataValidate.areas.value,
        description: this.dataValidate.description.value,
        firstName: this.dataValidate.firstName.value,
        lastName: this.dataValidate.lastName.value,
        hourlyRate: this.dataValidate.hourlyRate.value,
      };
      this.$store.dispatch("registerCoach", formData);
    },
  },
};
</script>
<style scoped>
form > label {
  font-weight: bold;
}
h3 {
  background: #e0e0e0;
  padding: 10px;
  text-align: center;
  margin: 0;
}
input[type="text"],
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.form-control.error input,
.form-control.error textarea {
  border: 1px solid #f00;
}
.error-msg {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 15px;
  font-style: italic;
  color: #f00;
}
</style>