<template>
  <div class="container">
    <div class="card">
      <div class="icon"><img src="@/assets/images/lock_icon.png" alt="" /></div>
      <h1 class="title">Meetple Candy</h1>
      <p class="description">
        고객의 핸드폰번호와 충전 캔디량을 입력해주세요.
      </p>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="input-group">
          <label for="customerPhoneNumber" class="label">
            고객 핸드폰번호
          </label>
          <input
              id="customerPhoneNumber"
              v-model="customerPhoneNumber"
              type="text"
              class="input"
              placeholder="01012341234"
              required
          />
        </div>
        <div class="input-group">
          <label for="currency" class="label">
            충전 캔디량
          </label>
          <input
              id="currency"
              v-model="currency"
              type="number"
              class="input"
              placeholder="randibot1@dssolve.com"
              required
          />
        </div>
        <button type="submit" class="button">캔디 충전하기</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const customerPhoneNumber = ref('');
const currency = ref(0);

const handleSubmit = async () => {
  if(!customerPhoneNumber.value) {
    alert('고객 핸드폰번호를 입력해주세요.');
    return;
  }

  if(!currency.value) {
    alert('충전 캔디량을 입력해주세요.');
    return;
  }

  try {
    const response = await $fetch('/api/recharge-currency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerPhoneNumber: customerPhoneNumber.value,
        currency: currency.value,
      }),
    });

    alert('캔디 충전 완료되었습니다.');
  } catch(e) {
    if(e.data.message) {
      alert(e.data.message);
    } else {
      alert('알 수 없는 오류가 발생했습니다.');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  width: 330px;
  max-width: 400px;
  text-align: center;

  .icon img {
    width: 60px;
  }
}

.title {
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 1rem;
}

.description {
  font-size: 16px;
  line-height: 24px;
  color: #555;
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 1.5rem;
  text-align: left;

  .label {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: block;
    color: #333;
  }

  .input {
    width: 100%;
    padding: 0.8rem;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: #333333 0 0 1px 0;
  }
}

.button {
  background: linear-gradient(45deg,#6751FF,#fd371f);
  color: #fff;
  padding: 1em;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e44e4e;
  }
}
</style>
