<template>
  <form>
    <div class="row mt-4">
      <div class="col-12 mb-4">
        <div v-show="errors.length > 0" class="alert alert-danger">
          <ul id="error">
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        <div v-show="success" class="alert alert-success text-center">
          Your email has been sent.
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <input
            v-model="user_name"
            class="form-control"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Name"
            required
          />
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <input
            v-model="user_email"
            class="form-control"
            type="email"
            placeholder="Email"
            name="email"
            autocomplete="email"
            required
          />
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <input
            v-model.number="user_phone"
            class="form-control"
            type="number"
            placeholder="(xxx) xxx - xxxx"
            name="tel"
            autocomplete="tel"
          />
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <textarea
            v-model="user_message"
            class="form-control"
            type="text"
            name="message"
            placeholder="Message"
          />
        </div>
      </div>
      <div class="col-lg-12">
        <button
          type="button"
          class="btn btn-lg main-btn ml-auto mr-auto mt-4 w-100"
          :disabled="isLoading"
          @click="sendEmail"
        >
          {{ !isLoading ? 'Send' : 'Sending...' }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const user_name = ref('');
const user_email = ref('');
const user_phone = ref('');
const user_message = ref('');
const errors = ref<string[]>([]);
const success = ref(false);
const isLoading = ref(false);

interface FormDataRequest {
  data?: [];
  success: boolean;
  error?: { message: string };
}

const validateForm = () => {
  errors.value = [];

  if (!user_name.value || user_name.value.length < 3) {
    errors.value.push('Name must be at least 3 characters.');
  }

  if (!user_email.value || !user_email.value.includes('@')) {
    errors.value.push('Please enter a valid email address.');
  }

  if (!user_message.value || user_message.value.length < 5) {
    errors.value.push('Message must be at least 5 characters.');
  }

  return errors.value.length === 0;
};

const restForm = () => {
  errors.value = [];
  user_name.value = '';
  user_email.value = '';
  user_phone.value = '';
  user_message.value = '';

  setTimeout(() => {
    success.value = false;
  }, 2000);
};

const sendEmail = async () => {
  if (!validateForm()) return;

  let html = '';

  html = `<p>Name: ${user_name.value}</p>`;
  html += `<p>Email: ${user_email.value}</p>`;
  html += `<p>Phone: ${user_phone.value}</p>`;
  html += `<p>Message: ${user_message.value}</p>`;

  isLoading.value = true;

  try {
    const response = await $fetch<FormDataRequest>('/api/send-email', {
      method: 'POST',
      body: {
        to: 'hainescityheadspa@gmail.com',
        subject: 'Booking Form',
        reply: user_email.value,
        name: user_name.value,
        message: user_message.value,
        html: html,
      },
    });

    if (response.success) {
      success.value = true;
      restForm();
    } else {
      console.log(response.error);
      errors.value.push(response.error?.message || 'Failed to send email.');
    }
  } catch (err) {
    errors.value.push('Error sending email: ' + (err as Error).message);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="css" scoped>
.form-outer {
  background: white;
  padding: 3% 4%;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  text-align: center;
  margin-bottom: 10px;
}

.form-control {
  font-family: 'Open Sans', sans-serif;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--grays-300);
  transition: all 150ms;
}

.form-control:focus {
  border-radius: 8px;
  outline: 1px solid var(--purple-500);
  border-color: var(--purple-500);
  box-shadow: none;
  margin: 6px 0;
}

#error {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
