import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faTrash,
  faPenSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assests/Header/Logo1.png";
import { Link } from "react-router-dom";
import "../Pages/Styles/Request.css";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isChecked, setIsChecked] = useState(" ");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editFlow, setEditFlow] = useState("");
  const [editNumber, setEditNumber] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/requests");
      if (!response.ok) {
        throw new Error("Nepavyko gauti užklausų.");
      }
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error("Klaida gaunant užklausas:", error);
    }
  };
  const handleSaveEdit = async (id) => {
    try {
      if (!id) {
        throw new Error("Nepasirinkta užklausa redagavimui");
      }

      const now = moment().format("YYYY.MM.DD");

      const response = await fetch(`http://localhost:5000/requests/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editName,
          number: editNumber,
          email: editEmail,
          message: editMessage,
          flow: `${editFlow} - ${now}`, // Čia pridedame laiko žymėjimą
        }),
      });

      if (!response.ok) {
        throw new Error("Nepavyko atnaujinti užklausos.");
      }

      const updatedRequest = await response.json();
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === updatedRequest._id ? updatedRequest : request
        )
      );
      closeModal();
    } catch (error) {
      console.error("Klaida atnaujinant užklausą:", error);
    }
  };

  const filteredRequests = requests.filter((request) =>
    `${request.name} ${request.message} ${request.number} ${request.flow}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const openModal = (request) => {
    setSelectedRequest(request);
    setEditName(request.name);
    setEditMessage(request.message);
    setEditFlow(request.flow);
    setEditNumber(request.number);
    setEditEmail(request.email);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    setEditName("");
    setEditMessage("");
    setEditFlow("");
    setEditNumber("");
    setEditEmail("");
  };

  const handleCancelEdit = () => {
    setSelectedRequest(null);
    setEditName("");
    setEditMessage("");
    setEditFlow("");
    setEditNumber("");
    setEditEmail("");
    closeModal();
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/requests/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Įvyko klaida trinant užklausą.");
      }
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
    } catch (error) {
      console.error("Klaida trinant užklausą:", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/requests/${id}/complete`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: !isChecked }),
        }
      );
      if (!response.ok) {
        throw new Error("Nepavyko pažymėti užklausos kaip užbaigtos.");
      }
      setIsChecked(!isChecked);
      const updatedRequest = await response.json();
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id
            ? { ...request, completed: updatedRequest.completed }
            : request
        )
      );
    } catch (error) {
      console.error("Klaida keičiant užklausos būseną:", error);
    }
  };

  return (
    <div className="container">
      <div className="request-container">
        <div className="request-header-container">
          <h1>Užklausos</h1>
          <Link to="/">
            <img className="header-logo" src={logo} alt="logo" />
          </Link>
          <div className="request-search">
            <input
              type="text"
              placeholder="Ieškoti..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="request-table">
          {filteredRequests.map((request) => (
            <div
              className={`card ${request.completed ? "completed" : ""}`}
              key={request._id}
            >
              <div className="card-body">
                <p className="card-text">
                  <strong>Sukurta: </strong>
                  {moment(request.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </p>
                <p className="card-text">
                  <strong>ID: </strong>
                  {request._id}
                </p>
                <p className="card-text">
                  <strong>Vardas: </strong>
                  {request.name}
                </p>
                <p className="card-text">
                  <strong>Tel. Nr.: </strong>
                  {request.number}
                </p>
                <p className="card-text">
                  <strong>El. Paštas: </strong>
                  {request.email}
                </p>
                <p className="card-text">
                  <strong>Užklausa: </strong>
                  {request.message}
                </p>
                <p className="card-text">
                  <strong>Užklausos pildymas: </strong>
                  {request.flow}
                </p>
              </div>
              <div className="card-actions">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`icon green ${isChecked ? "completed" : ""}`}
                  onClick={() => toggleComplete(request._id)}
                />
                <FontAwesomeIcon
                  icon={faPenSquare}
                  className="icon yellow"
                  onClick={() => openModal(request)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon red"
                  onClick={() => handleDelete(request._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRequest && isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-main-content">
              <h2>Redaguoti užklausą</h2>
              <p>Vardas</p>
              <input
                type="text"
                placeholder="Vardas"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <p>Tel. Nr.</p>
              <input
                type="text"
                placeholder="Tel. Nr."
                value={editNumber}
                onChange={(e) => setEditNumber(e.target.value)}
              />
              <p>El. Paštas</p>
              <input
                type="email"
                placeholder="El. Paštas"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <p>Kliento užklausa</p>
              <textarea
                rows={2}
                placeholder="Užklausa"
                value={editMessage}
                onChange={(e) => setEditMessage(e.target.value)}
              />
              <p>Užklausos pildymas</p>

              <textarea
                rows={2}
                placeholder="Užklausos"
                value={editFlow}
                onChange={(e) => setEditFlow(e.target.value)}
              />
              <p>
                Užklausos pildymo data:{" "}
                {moment(editFlow.split(" - ")[1]).format("YYYY.MM.DD")}
              </p>
              <button onClick={() => handleSaveEdit(selectedRequest._id)}>
                Atnaujinti
              </button>
              <button onClick={handleCancelEdit}>Atšaukti</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
