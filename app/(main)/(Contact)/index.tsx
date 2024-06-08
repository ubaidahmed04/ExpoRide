import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = async () => {
    try {
      await send(
        'service_mj7izqf',
        'template_m81x4lk',
        {
          name,
          email,
          phone,
          address,
          message: 'This is a static message',
        },
        {
          publicKey: 'BGeB65cbgpJqCoxYb',
        },
      );

      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EmailJS Request Failed...', err);
      }

      console.log('ERROR', err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABGEAABAwIDAwYJCQUJAQAAAAABAAIDBBEFEiEGEzEUQVFhcZIWIjJTVIGRk6EHFSNCQ1JVsdEzcqLB4SQlNWJjc4Kj8DT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAKBEAAwACAQMEAAcBAAAAAAAAAAECAxESBCExEyJBURQjMjNCkbFD/9oADAMBAAIRAxEAPwD3FERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBFa5waLkrWfU38gLqTZxvRtqlx0qPL3HUklW3PX7VP0yPMk0UaC77x9qvbNIOBv2p6bCs30WsypB8sWWdrg4aEFQaaJJ7LkVEXDpVFhkna3rPUsDp5HcNFJS2RdJG6ijt688XH2qomePrKXps5zRIItNtS4cbFZmTxu57dqi5aOqkZkVEUSRVFRAgKoiIAiIgCo4gC5RalVJmdlBNhxXZW2cb0WSyl50PirGg4KhcGi5KvS0Ut9yqLC6paOAJKxmpeeYBTUtkdo2kWlv5OlN9J94rvBjkjdVzHOadDZR+8k++5WmR1rFx7Lp6f2OZMtq2Ws82cFZJM5/A2CiNONxftWzDNezXm55ioPEl3OrI2bFyoLaHFZqR7aenIa4jM5xF7KdPBcjtT/iQ/wBsLR0sTeTTKeoqpjsYPnvEfST3Qnz1iPpJ7oSiqaCKDLVUBmkufH3hGiz8uwf8J/7St7mU9en/AIYk6a/WYPnrEfST3Qnz1iOn9pOv+ULPy7B/wn/tK1ZaihdWRSR0ZZA0eNFvPK9aKZf/AD/w66pfzMox7FG8Ks262hXDaHFRrym/a0K/l2E/hJ96Vo18tPNKDS025ZbUZs2qTEU9PHr+g7tfzO7wDEHYlQiZ4Ae0lrrcLqTC53Yn/DJf90/kF0QXi54UZaSPVwU6xpsqiIqS0IiIDFM/JGTzrRWaqdd+UcywE2BPQroXYqp9zHNLu9BxWq9xcbuOqOdnJceKotMzpFLZRFXjfjoiltHCiIq2tx0TYKcNVye0m2Yw3EBheFUrq7EC7IWA+K13R1ldXI7JE9/3WkrzzYaODCdnqzbHFWbyqnzOivxuTzfvOPsCPSW2dlbOppqyvw+i5ZtVW0FIw/YxNJIPRe+p7Aoyb5RcEbLlgbVTXcGg7uw157lcVV4btDtSG4zUPZMJc26jMlhG258VreFviedQlVhGJUri2ehqGu/yxl35LscN6ddy28VpJ6PfcPxWkq7sgqoZiBciOQOI7bKD2pP95Ntr9GFxXyc7PYm3G4sSnglpaaFrtZLtMlxYAD469AXYbQNdy0EjiwcFd08zObszH1G+GjHR5dzryK9z+2bdy2PF6cM7pWhDU7qPLyeB+vGSO5WTlo9Do/chabxU3vRlVJI27t6cM7pVPF6cM7pWpy0eh0nuAnLR6JSe5Cj6NneaNs5AL/3Zb9wrSrrb0Zdxa32DbBYpZBK8vyNaehjbBWdo9dldGLj7mQqt/B2mxDv7ulH+qT+S6MLmdjMzaQkggPebexdMvC6r92mev0/7aKoiLOXhUJsLqqxzm0TrdCBmi45nucecrFObROssixVbgyBzjwWqV4M7+zTtYoo+ixNtVIY3NyOPk891IFaXLl6ZTLTWyTwoAxOJAOq1ZdpsEgixGWWsiazDXiOrNv2TjwBWfDqiGKNzZHhpvfVZicPIkDmwkSnM+7R4x6T0rDafJmqGtGOPF8NlxT5rjqIzWmAVAhtruybByYjTPeQ+JosBrbiswkohLvQYt5ly57a26L9C06+p3jw2KQluXgOlMarl2FtaNaOPeEscbCxzEdCjcf2Jpa7ZiDAqWompo6ZjRDJcOuWj6wt28LaqThkELszgHNPEdSzVGJQCB5p88sgbZoPMrM1XPuXwcwJOtfJxzGR4Vh0UVPA90MDAxrG2uAOm6yy1DY4w9zZCHW8RjMxF+kBKymiq6WWnqWl0TxZ4uRcLAYqernjyOztie1w3b+BHAG3EaryUtvb8n0vhaWjpoL7ln7oVtRTQ1LcszA4c3UsbKjK0NLRoOZXioYeNwveiaUo+UyuapkHjNJBTOibTsIe697EkrboMIj3OeqbdztQ2/khSO6hfMJ9HPAsD0LK42FzYDnKueelPHZROFOvGzT+aaLzJ75/VPmmi8z/Ef1W4HB4JjIPRroUccrHOtewJVay01tUWPFKfg0xhNF5n+I/qtiLBsMkH7DXnBef1XFO2m2kdBQ1MdPhQirqgwwtc9+YHW2bXTQH+qvm2l2mpG4vK6HCSMJ1msXkvFr+KL66dfHTrSqt+GSWOfo9KpGNidGyNoa1ugAGgUgF5VUbX7UUdRRMfT4QXVUO+jyl5AHQdexddsBtFVbSYXUVFdDDFLDUOhIivlNrdPaseXHSXJ+C/G1+k6hERUFoPBYKo/RetZzwWCr/Zetdnycfg01q1z7xuaOg/ktlzg1uY8y5/EcSfT1IZkzNIuf8A3qW3FDquxly0pXcisOmigqWSTXsOBHN1qdqqplPTcoDS9ptYDnUXX4dvYeU0NzcZ93+azsaKnAmlpvZmYeorZkc21RljlKaJGnmbPEJGeS5ZFF4TOGxxUwb4z2l9+gX0UoqLXGi+K3JVYZZg3RurlZXVUVLA+SV7WMY3M97jYNC83xz5QJC90WCxADz8o49YapRGwz0F7i43f085tZYKh7muygua4C/CxXjU+KYjXGaWrrpnvDLtOY2YczbEDgLL3XBHw7U7PUOJAiOofGBIRzPGjgfWFn67ksWp+TX0PCMquzj4aOaPHpqiokq5RVNyOHGJ2gFyOLTYdilcIwejwmJ8dDCyJjnFzgON+1TTcBqX76GUDdvjewPa6xBI0K8kpdr8YwyW0sgqYg4tcyYahzdCL+w+tZ+jxept35Rr63qHD44vDPUk51C7PbSUeOxOEF46mNt5IXcQOkdIU11HivUPG+Tdo6MS5M8rojJfIcujuq/T1LX2jpdzHCx5kqI2kmWOJt3WtoSBzXW7TT074GQVjvomcGAHxj0nsWR1TS0/j0czi8izw+53g7TzrzsyyXuTbguMdKyB2fafHfExzKdzAAHNIBdrci6mLXBB4FasMuU2cbt6ehY8YqZKWlD4CA5zgLno1/RX4cDiVBX1PULLbsjZNisAeTmogbuLrbx2hPGwvoqHYjADnJojd/lEyO8bn11UdSbRVtRU1EYdaOF2XPYeM7o9lj61j8JcT3jGciqbOeGl2VnDp48Fr/D5DL66Jyk2F2bfL9JQZmtbYfSHQe3rXW4HgtBgdK6mwunEMLnZyAb3PSoTZypkqoZd85r3B1rgcy6amfmZbo0XndQqT0zXgpUtmZERZi8LDU33RIWZWTC8TuxdXk4/BDVTxfIOA4qIxmmE1OZb+PGL+pSDjmJJ6VZJG2VhY8XaeIXoY3x0zHkXJaOZhxGamG7Y45eLSW3UlR1rDRzuFhoXADhc6H46+tXHDKJ0hjbK5sg+rm4epQ9Y11E6WG9y5wbcC17/APgtdcMnjyZZdx5N/ALyVBlJJDW5QfyU6fFBJ0stehp20tK1gADgAXHrUbiGKGlwieoBzPErmMv1nRVUnlv2liaxz3OT+VLEXNp6ShY7Wdxkk/dbaw9pv/xXnSk9oqqasxJzp5nSFjQ27ubif5qM4+tXOeD4k8dcp2ZohaOo0PkNPxXqnyHYlmgxHC3Ovu3idnY7Q/ELy6Z7W1MrHguYQGEDQ2AGo9i635JpzSbbQR58zKmCRgd94ix/kVR1E8sbLoeqPeOC+b9q6QU+1WNUY0HKnvZ1E+MPg4r6PPDReC/KjCKbbTE5W6PlbE5tvqhzLF38JCx9I/ey3KtyQGztU7DceoZzoA9rXfuO4/n8F7OvC53Fk7HAcGxn2AL3GnfvKeJ/O5jT8F6LMlF6K5jXPNmi56lm5HU+Zf7FB0l5YSbNda+KCSWjDGtLi14NgL6aqQ5HUeZf7EbR1LfGEL79i56kp734DxtrWjhn4dX01e+ppWZYJspnZIw6OHOO0aexTrKlzomNbhlO9obYO3BJPWukmpHywvY6J9nixFuCU9E+CBkTInWY217cV2upml3Ifh62aGzTZIGPMjN2C7QEWXTUzssnUVGbmQcY3W7FtUkmYC/1SsmZ+p7kaca49iVCqqBVWI1BYqh1onLKsNQLxOXV5OPwQkzckrh7FYtupZduYcQtTnW6X2Mr8kNjT4W1DXMztqW65m8LdarnhxCjFRI0Onhc11x1OBUhVUcFTrI3x+Zw4qGqaV+FuMgJdTzERvP3bkalaU5caXkztNVt+DZq6qaprnUcMgjaDlcek86jdrYG0uDwQtcSN8CT06LYoqKoqZTVWyNc/Nmdp1/zWPbn/wCGHo3n8ldi0ssJFOVPhTZ5DiDs9dO7/OfgsLBmkaBzkD4q6Y5pnk87istHG108Lt5Ho8FzS6x49fH1LtvdNmqFqUjHUEOqJSOBe78yug2LnNNtlgGtrS2cf32u/ULnHse0kSNLXc4OhupPApsmL4VOL5oayAOPS0vAv8VVa3LRNeUfTK8T+V2LLtw17tY5cNjzDsfL8eC9suvHPlqblxynmHE0O7HbvHfyuvN6V/mGjL4POKs+S61vom37q9vwt2bDKV3+iwn2BeI1ZFmHphb+S9s2eBmwnDw3XNAy/ZZek3qdmVk/hFOHHeO4cVMrBSRbqEC1iRdZ15WSnVbNcLS0EVHODRdxAHSrBPGXZQ4XUCRkQIhtz8EBrV8uSPL9Zyj6d2V49iuqpTLKXcw0HYsbPLb2haojUmeq3R0I4KqtHAK5YzSFbI3MwjpCuQ8EBGu5wR1LRnZu3WHAqUqo7PzDgtScxho3r2MB4FxtqtMUZ7RqxW3zA4XGYXUpPhtHUROjmgY9juII486hjNCx9t/F3wpuHEKSRgcKmHs3gTNvs0dx6+S2algigcWxNFhpouE261w6EnzoHwXa4hX0u4LBURFzuh4XE7aSMkw2ERyMeRMCQ1wPMVp6B6ypv7M/WL8t8Tx+sgfT1D2PFhe7SdMwWG1jZ2mll0+KNPIn5Yg9wsW3bdQW7cRd1FIOuNrh8F6PURMX2ZV02Srx+5GGOeRgAzXb906hZqSqZBUQziMsfG9rrxnjYg8D2KnJmn7Oqb2x3XT0Hyf11dRwVUeJ0UTZmB4bK0hwB6deKzVUpdzRpvwes7N7bYNtDdlJLJFOwXfFPGWlvr8k+orgflojmqsZw19JFLURtpn5jAwvDTm5yO1T2yey1NgmHPgqa+OSaSQve+NoAI4AaklbtfQPLmMoqiEsIu8ySZSD2LyeVY8u4W0ehOPFce6tM8OqWlu5DmkHctvcdXBeufJI2tqcHc6scTTskLKa41yjjr26LVx7Y753gH9ppWVTfIlLuA5wenRd3s/S0mF4XBSQSRZImBgs4cy1ZOo549a7mZ4VNdnslkWLfwj7WPvhV38PnY++Fk0WCeITNAJtZYo6RjXXcS7qWXfw+dj74Tfw+dj74XO4Mi1a6Xdx5frO4dizcohH20ffCiKipjlmcd4zq8YaBWY52yFvSLeZXwtLpWAdIWIyMH12d4LbwwsfVDK9psL8QtNvUlCTbJpVVBwVVgNYREQFr2hwIIuuc2pwuGrw2XlLSTA10kduGa3OulWrikTpsOqY2NzPfE5rR0khTitMi1s8FE1SWizox2MVTJUni6PuKZbsjj+UXwyUafeH6qvglj34bN3gt/OPso00QokqRwdGP+CrvqocHxj/AIKZ8Ese/DZu8E8Esf8Aw2bvBd9SF4Y0yG31V99ndTf1fnGd1TPglj/4bN3gnglj34bN3h+qepH2OLImKardIxplZYuA8lS8c1XGxrWyRWaLD6PVXQ7J482VhOHS2DgT4w/VSXg3jHoEvtCjVx9nUmRnKa21t7Fb/b/qnKa21t7D7v8AqpPwbxj0CXvBPBvGPQJe8FHlB3TI3lVb52H3apyis87D7tSfg3jHoEveCeDeMegS94JygaZGcorPOw+7TlFZ52H3ak/BvGPQJe8E8G8Y9Al7wTlA0yM5RWedh92nKKzzsPu1J+DeMegy94J4N4x6BL3gnKBpkYKisH2kPu0FRWD7SH3f9VJ+DeMegS94J4N4x6BL3gnKPsaZGcprfOQ+7/quw2BpxVGepqXXlgeAzILDUKC8G8Y9Bl9oXXbE4fV4fDVtrIXROe9paHW1FlVmpOdIlKezpkRFlLQiIgCIiAoiqiAoiqiAoiqiAollVEBSyWVUQFLJZVRAUsllVEBSyWVUQFLJZVRAUsqoiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/Z' }}
         style={styles.profileImage} />
        {/* <Text style={styles.headerText}>Profile</Text> */}
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder='John Mac'
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder='johnmac@example.com'
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder='+92 3127718780'
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          placeholder='123 Main St, Karachi, Pakistan'
          onChangeText={setAddress}
        />
        <View style={{marginTop:10,borderRadius:10}}>
        <Button title="Submit" onPress={onSubmit} color="#175E96" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 150,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});

export default ProfileScreen;
