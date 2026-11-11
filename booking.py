
import os
import re
import resend

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Allow the website to connect during local testing
CORS(app)

# Resend configuration
resend.api_key = os.getenv("RESEND_API_KEY")
teacher_email = os.getenv("TEACHER_EMAIL")


@app.route("/booking", methods=["POST"])
def booking():

    # Receive student data
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "message": "Invalid JSON data"
        }), 400

    name = data.get("name", "")
    phone = data.get("phone", "")
    level = data.get("level", "Unknown")

    # Validate data
    if not isinstance(name, str) or not isinstance(phone, str):
        return jsonify({"message": "Invalid student information"}), 400

    if not isinstance(level, str):
        return jsonify({"message": "Invalid English level"}), 400

    name = name.strip()
    phone = phone.strip()
    level = level.strip()

    if not name or not phone:
        return jsonify({
            "message": "Name and phone are required"
        }), 400

    if len(name) > 100 or not re.fullmatch(r"\+?[0-9\s()-]{7,25}", phone):
        return jsonify({
            "message": "Invalid name or phone number"
        }), 400

    if level not in ["Unknown", "A1", "A2", "B1", "B2", "C1"]:
        return jsonify({
            "message": "Invalid English level"
        }), 400

    if not resend.api_key or not teacher_email:
        return jsonify({
            "message": "Email service is not configured"
        }), 500

    # Email content
    email_message = f"""
New English Lesson Booking Request

Student Name: {name}
WhatsApp Number: {phone}
English Level: {level}

Please contact the student to arrange the lesson.
"""

    try:
        # Send email using Resend
        result = resend.Emails.send({
            "from": "Emo-Tion <onboarding@resend.dev>",
            "to": [teacher_email],
            "subject": "New Booking Request - Emo-Tion",
            "text": email_message
        })

        print("Email accepted by Resend:", result)

        return jsonify({
            "success": True,
            "message": "Booking request sent successfully!"
        }), 200

    except Exception as error:
        print("Email sending failed:", error)

        return jsonify({
            "success": False,
            "message": "Failed to send booking request"
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001)
